import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	FlatList,
} from "react-native";

import firestore from "@react-native-firebase/firestore";
import { useAuth } from "./AuthContext";
// Use require instead of import
import tibetanSort from "./tibetan-sort-js";

function LibraryScreen({ navigation }) {
	const { user, logout } = useAuth();

	if (!user) {
		return null;
	}

	const [library, setLibrary] = useState([]);

	// Update the library state with the collected notes
	useEffect(() => {
		const subscriber = firestore()
			.collection("Users")
			.doc(user.uid)
			.collection("Notes")
			.onSnapshot((querySnapshot) => {
				const notesArray = [];
				querySnapshot.forEach((documentSnapshot) => {
					const noteData = documentSnapshot.data();
					notesArray.push({
						...noteData,
						id: documentSnapshot.id, // Include the document ID
					});
				});
				// Sort the notes by their title using the Tibetan sorting function
				notesArray.sort((a, b) => tibetanSort.compare(a.title, b.title));

				setLibrary(notesArray);
			});

		return () => subscriber(); // Unsubscribe when component unmounts
	}, []); // Empty dependency array to ensure this effect runs only once

	const renderNote = ({ item }) => (
		<TouchableOpacity
			style={styles.noteContainer}
			onPress={() => navigation.navigate("NewNote", { note: item })}
		>
			<Text style={styles.noteTitle}>{item.title}</Text>
			<Text style={styles.noteBody}>{item.body}</Text>
		</TouchableOpacity>
	);

	return (
		<View style={styles.container}>
			<FlatList
				data={library}
				renderItem={renderNote}
				keyExtractor={(item, index) => index.toString()}
			/>
			<TouchableOpacity
				style={styles.addButton}
				onPress={() => navigation.navigate("NewNote")}
			>
				<Text style={styles.addButtonText}>+</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f2f2f7", // Consistent background color
		alignItems: "center",
		justifyContent: "flex-start", // Adjust alignment
		width: "100%",
		paddingTop: 20, // Add padding at the top
	},
	noteContainer: {
		margin: 10,
		padding: 10,
		backgroundColor: "#fff", // Light background for notes
		borderRadius: 5,
		width: "90%",
		shadowColor: "#000", // Add shadow for a subtle depth
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	noteTitle: {
		fontWeight: "bold",
		fontSize: 16,
		marginBottom: 5,
	},
	noteBody: {
		fontSize: 14,
	},
	addButton: {
		backgroundColor: "#007AFF", // Consistent button color
		width: 60,
		height: 60,
		borderRadius: 30,
		alignItems: "center",
		justifyContent: "center",
		position: "absolute",
		bottom: 20,
		right: 20,
	},
	addButtonText: {
		color: "white",
		fontSize: 30,
	},
});

export default LibraryScreen;
