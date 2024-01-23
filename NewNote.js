import React, { useState, useContext } from "react";
import {
	StyleSheet,
	View,
	TextInput,
	TouchableOpacity,
	Text,
} from "react-native";
import firestore from "@react-native-firebase/firestore";
import { useAuth } from "./AuthContext";

function NewNote({ navigation, route }) {
	const existingNote = route.params?.note; // Get passed note, if any

	const [noteTitle, setNoteTitle] = useState(existingNote?.title || "");
	const [noteBody, setNoteBody] = useState(existingNote?.body || "");
	const [isEditMode, setIsEditMode] = useState(!!existingNote);
	const { user, logout } = useAuth();

	if (!user) {
		return null;
	}

	const addNote = () => {
		if (noteTitle.trim().length === 0 || noteBody.trim().length === 0) {
			// Optionally handle the case of empty title or body
			return;
		}
		firestore().collection("Users").doc(user.uid).collection("Notes").add({
			title: noteTitle.trim(),
			body: noteBody,
		});

		setNoteTitle(""); // Clear the title field
		setNoteBody(""); // Clear the body field
		navigation.goBack(); // Navigate back to the Library screen
	};

	const saveNote = () => {
		if (noteTitle.trim().length === 0 || noteBody.trim().length === 0) {
			// Optionally handle the case of empty title or body
			return;
		}

		const collectionRef = firestore()
			.collection("Users")
			.doc(user.uid)
			.collection("Notes");

		if (existingNote) {
			// Update existing note
			collectionRef.doc(existingNote.id).update({
				title: noteTitle.trim(),
				body: noteBody,
			});
		} else {
			// Add new note
			collectionRef.add({
				title: noteTitle.trim(),
				body: noteBody,
			});
		}

		setNoteTitle("");
		setNoteBody("");
		navigation.goBack();
	};

	const deleteNote = () => {
		// Only proceed if in edit mode and a note ID is available
		if (isEditMode && existingNote?.id) {
			firestore()
				.collection("Users")
				.doc(user.uid)
				.collection("Notes")
				.doc(existingNote.id)
				.delete()
				.then(() => {
					navigation.goBack(); // Navigate back after deletion
				})
				.catch((error) => {
					console.error("Error deleting note: ", error);
					// Optionally handle the error, e.g., show an alert
				});
		}
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
				<Text style={styles.addButtonText}>
					{isEditMode ? "Save Note" : "Add Note"}
				</Text>
			</TouchableOpacity>
			{isEditMode && (
				<TouchableOpacity style={styles.deleteButton} onPress={deleteNote}>
					<Text style={styles.deleteButtonText}>Delete Note</Text>
				</TouchableOpacity>
			)}
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
	deleteButton: {
		marginTop: 10,
		width: "90%",
		padding: 15,
		backgroundColor: "#cc0000",
		borderRadius: 10,
		alignItems: "center",
	},
	deleteButtonText: {
		color: "white",
		fontSize: 18,
	},
});

export default NewNote;
