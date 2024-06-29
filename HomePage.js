import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Modal,
  TextInput,
  Button,
  useWindowDimensions,
  SafeAreaView,
} from "react-native";
import firestore from "@react-native-firebase/firestore";
import { useAuth } from "./AuthContext";
import { useNavigation } from "@react-navigation/native";
import PechaSVG from "./components/PechaSVG";

function HomePage() {
  const { user } = useAuth();
  const navigation = useNavigation();
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [newCollectionTitle, setNewCollectionTitle] = useState("");
  const [newCollectionDescription, setNewCollectionDescription] = useState("");
  const { width, height } = useWindowDimensions();
  const isPortrait = height > width;
  const pechaWidth = isPortrait ? width - 32 : (width - 48) / 2;

  useEffect(() => {
    if (user) {
      const collectionsRef = firestore()
        .collection("Users")
        .doc(user.uid)
        .collection("Collections");
      collectionsRef
        .get()
        .then((querySnapshot) => {
          const userCollections = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            title: doc.data().title,
            description: doc.data().description,
          }));
          setCollections(userCollections);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching collections: ", error);
          setLoading(false);
        });
    }
  }, [user]);

  const handlePressCollection = (collectionId = null) => {
    if (collectionId === "all-words") {
      // Navigate to a special screen that shows all notes across all collections
      navigation.navigate("Dictionary", { currentCollection: null });
    } else {
      navigation.navigate("Dictionary", { currentCollection: collectionId });
    }
  };

  const handleAddCollection = () => {
    if (newCollectionTitle.trim() === "") {
      alert("Please enter a title for the collection.");
      return;
    }
    const collectionsRef = firestore()
      .collection("Users")
      .doc(user.uid)
      .collection("Collections");
    collectionsRef
      .add({ title: newCollectionTitle, description: newCollectionDescription })
      .then(() => {
        setCollections([
          ...collections,
          {
            id: Math.random().toString(),
            title: newCollectionTitle,
            description: newCollectionDescription,
          },
        ]);
        setNewCollectionTitle("");
        setNewCollectionDescription("");
        setModalVisible(false);
      })
      .catch((error) => {
        console.error("Error adding collection: ", error);
      });
  };

  const renderPecha = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.pechaContainer,
        isPortrait ? styles.pechaPortrait : styles.pechaLandscape,
      ]}
      onPress={() => handlePressCollection(item.id)}
    >
      <PechaSVG
        title={item.title}
        description={item.description}
        hexColor={item.hexColor}
        width={pechaWidth}
      />
    </TouchableOpacity>
  );
  allWordsPecha = {
    id: "all-words",
    title: "All Words",
    description: "All words in the dictionary",
    hexColor: "#B31D1D",
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.topLeftTextButton}
        >
          <Text style={styles.topLeftTextButtonText}>Settings</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Collections</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.addButtonText}>Add Collection</Text>
        </TouchableOpacity>
      </View>
      {isPortrait ? (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          {[...collections, allWordsPecha].map((item, index) =>
            renderPecha({ item, index }),
          )}
        </ScrollView>
      ) : (
        <FlatList
          data={[...collections, allWordsPecha]}
          renderItem={renderPecha}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.flatListContainer}
        />
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              placeholder="Collection Title"
              style={styles.input}
              onChangeText={setNewCollectionTitle}
              value={newCollectionTitle}
            />
            <TextInput
              placeholder="Collection Description"
              style={styles.input}
              onChangeText={setNewCollectionDescription}
              value={newCollectionDescription}
            />
            <Button title="Add" onPress={handleAddCollection} />
            <Button title="Cancel" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  header: {
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F2",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  scrollViewContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  flatListContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  pechaContainer: {
    marginBottom: 12,
  },
  pechaPortrait: {
    width: "100%",
  },
  pechaLandscape: {
    width: "50%",
    paddingHorizontal: 8,
  },
  topLeftTextButton: {
    padding: 8,
    borderRadius: 5,
  },
  topLeftTextButtonText: {
    fontSize: 12,
  },
  addButton: {
    backgroundColor: "#B31D1D",
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: "#FFFFFF",
  },
  centeredview: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
});

export default HomePage;
