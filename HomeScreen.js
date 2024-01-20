import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	FlatList,
} from "react-native";

import firestore from "@react-native-firebase/firestore";
import { AuthProvider } from "./AuthContext";
import { useAuth } from "./AuthContext";

function HomeScreen({ navigation }) {
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
					notesArray.push(noteData);
				});
				setLibrary(notesArray);
			});

		return () => subscriber(); // Unsubscribe when component unmounts
	}, []); // Empty dependency array to ensure this effect runs only once

	const renderNote = ({ item }) => (
		<View style={styles.noteContainer}>
			<Text style={styles.noteTitle}>{item.title}</Text>
			<Text style={styles.noteBody}>{item.body}</Text>
		</View>
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
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
	},
	noteContainer: {
		margin: 10,
		padding: 10,
		backgroundColor: "#f9f9f9",
		borderRadius: 5,
		width: "90%", // Adjust as needed
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
		backgroundColor: "blue",
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

export default HomeScreen;
