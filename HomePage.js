import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Modal,
  TextInput,
  Button,
  useWindowDimensions,
} from "react-native";
import firestore from "@react-native-firebase/firestore";
import { useAuth } from "./AuthContext";
import { useNavigation } from "@react-navigation/native";
import PechaCard from "./components/PechaCard";

function HomePage() {
  const { user } = useAuth();
  const navigation = useNavigation();
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [newCollectionTitle, setNewCollectionTitle] = useState("");
  const { width, height } = useWindowDimensions();
  const isPortrait = height >= width;

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
      .add({ title: newCollectionTitle })
      .then(() => {
        setCollections([...collections, { id: Math.random().toString(), title: newCollectionTitle }]);
        setNewCollectionTitle("");
        setModalVisible(false);
      })
      .catch((error) => {
        console.error("Error adding collection: ", error);
      });
  };

  const renderPechaCard = ({ item }) => (
    <TouchableOpacity
      style={styles.pechaCard}
      onPress={() => handlePressCollection(item.id)}
    >
      <PechaCard title={item.title} hexColor={item.hexColor} />
    </TouchableOpacity>
  );

  const allWordsPecha = { id: "all-words", title: "All Words", hexColor: "#B31D1D" };

  return (
    <View style={styles.container}>
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
          {[...collections, allWordsPecha].map((item) => (
            <TouchableOpacity
              style={styles.pechaCard}
              key={item.id}
              onPress={() => handlePressCollection(item.id)}
            >
              <PechaCard title={item.title} hexColor={item.hexColor} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <FlatList
          data={[...collections, allWordsPecha]}
          renderItem={renderPechaCard}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.collectionContainer}
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
            <Button title="Add" onPress={handleAddCollection} />
            <Button title="Cancel" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  pechaCard: {
    flex: 1,
    margin: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  header: {
    padding: 24,
    marginTop: 22,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F2",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",
  },
  collectionContainer: {
    paddingHorizontal: 10,
  },
  scrollViewContainer: {
    paddingHorizontal: 10,
    alignItems: "center",
  },
  topLeftTextButton: {
    position: "absolute",
    top: 12,
    left: 24,
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
    zIndex: 1,
  },
  topLeftTextButtonText: {
    fontSize: 12,
    textAlign: "center",
  },
  addButton: {
    backgroundColor: "#B31D1D",
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: "#FFFFFF",
  },
  centeredView: {
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

