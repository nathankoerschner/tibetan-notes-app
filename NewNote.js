import React, { useState, useContext } from "react";
import {
	StyleSheet,
	View,
	TextInput,
	TouchableOpacity,
	Text,
} from "react-native";
import firestore from "@react-native-firebase/firestore";

function NewNote({ navigation }) {
	const [noteTitle, setNoteTitle] = useState("");
	const [noteBody, setNoteBody] = useState("");

	const addNote = () => {
		if (noteTitle.trim().length === 0 || noteBody.trim().length === 0) {
			// Optionally handle the case of empty title or body
			return;
		}
		firestore().collection("Users").doc("User1").collection("Notes").add({
			title: noteTitle,
			body: noteBody,
		});

		const newNote = { title: noteTitle, body: noteBody };
		setNoteTitle(""); // Clear the title field
		setNoteBody(""); // Clear the body field
		navigation.goBack(); // Navigate back to the Home screen
	};

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.titleInput}
				placeholder="Note Title"
				placeholderTextColor="#666"
				value={noteTitle}
				onChangeText={setNoteTitle}
			/>
			<TextInput
				style={styles.bodyInput}
				placeholder="Note Body"
				placeholderTextColor="#666"
				value={noteBody}
				multiline
				numberOfLines={4}
				onChangeText={setNoteBody}
			/>
			<TouchableOpacity style={styles.addButton} onPress={addNote}>
				<Text style={styles.addButtonText}>Add Note</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f4f4f4",
		alignItems: "center",
		paddingTop: 20,
	},
	titleInput: {
		width: "90%",
		padding: 15,
		marginBottom: 10,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 10,
		backgroundColor: "white",
		fontSize: 16,
	},
	bodyInput: {
		width: "90%",
		padding: 15,
		marginBottom: 20,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 10,
		backgroundColor: "white",
		fontSize: 16,
		textAlignVertical: "top", // For Android multiline text input
	},
	addButton: {
		width: "90%",
		padding: 15,
		backgroundColor: "#007bff",
		borderRadius: 10,
		alignItems: "center",
	},
	addButtonText: {
		color: "white",
		fontSize: 18,
	},
});

export default NewNote;
