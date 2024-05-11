import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  Button,
} from "react-native";
import firestore from "@react-native-firebase/firestore";
import { useAuth } from "./AuthContext";
import { useNavigation } from "@react-navigation/native";

function HomePage() {
  const { user } = useAuth();
  const navigation = useNavigation();
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [newCollectionTitle, setNewCollectionTitle] = useState("");

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
  }, [user, collections]);

  const handlePressCollection = (collectionId = null) => {
    navigation.navigate("Dictionary", { currentCollection: collectionId });
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
        setCollections([...collections]);
        setNewCollectionTitle("");
        setModalVisible(false);
      })
      .catch((error) => {
        console.error("Error adding collection: ", error);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={styles.topLeftTextButton}
      >
        <Text style={styles.topLeftTextButtonText}>Settings</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Collections</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.addButtonText}>Add Collection</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.collectionContainer}>
        {collections.map((collection) => (
          <TouchableOpacity
            key={collection.id}
            style={styles.blueCollectionItem}
            onPress={() => handlePressCollection(collection.id)}
          >
            <Text style={styles.collectionText}>{collection.title}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.redCollectionItem}
          onPress={() => handlePressCollection()}
        >
          <Text style={styles.collectionText}>All Words</Text>
        </TouchableOpacity>
      </ScrollView>
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
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  header: {
    padding: 24,
    marginTop: 12,
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
  collectionContainer: {
    padding: 20,
  },
  blueCollectionItem: {
    backgroundColor: "#0F2497",
    padding: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  redCollectionItem: {
    backgroundColor: "#B31D1D",
    padding: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  collectionText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
  },
  topLeftTextButton: {
    position: "absolute",
    top: 12,
    left: 8,
    padding: 8,
    borderRadius: 5,
    zIndex: 1,
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
