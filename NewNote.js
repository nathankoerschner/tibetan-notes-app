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
import tibetanSort from "./tibetan-sort-js";
function NewNote({ navigation, route }) {
	const { currentCollection } = route.params;
	const existingNote = route.params?.note; // Get passed note, if any

	const [noteTitle, setNoteTitle] = useState(existingNote?.title || "");
	const [noteBody, setNoteBody] = useState(existingNote?.body || "");
	const [isEditMode, setIsEditMode] = useState(!!existingNote);
	const { user, logout } = useAuth();

	if (!user) {
		return null;
	}

	const addNote = () => {
		if (noteTitle.trim().length === 0) {
			// Optionally handle the case of empty title or body
			return;
		}
		const rootLetter = tibetanSort.determineRootLetter(noteTitle) ?? "*";
		firestore()
			.collection("Users")
			.doc(user.uid)
			.collection("Notes")
			.add({
				title: noteTitle.trim(),
				body: noteBody,
				collections: [currentCollection],
				rootLetter, // Add this line
			});

		setNoteTitle(""); // Clear the title field
		setNoteBody(""); // Clear the body field
		navigation.goBack(); // Navigate back to the Library screen
	};

	const saveNote = () => {
		if (noteTitle.trim().length === 0) {
			// Optionally handle the case of empty title or body
			return;
		}

		const rootLetter = tibetanSort.determineRootLetter(noteTitle) ?? "*";
		const collectionRef = firestore()
			.collection("Users")
			.doc(user.uid)
			.collection("Notes");

		if (existingNote) {
			// Update existing note
			collectionRef.doc(existingNote.id).update({
				title: noteTitle.trim(),
				body: noteBody,
				rootLetter, // Add this line
			});
		} else {
			// Add new note
			collectionRef.add({
				title: noteTitle.trim(),
				body: noteBody,
				rootLetter, // Add this line
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
			{isEditMode && (
				<View style={styles.header}>
					<TouchableOpacity style={styles.deleteButton} onPress={deleteNote}>
						<Text style={styles.deleteButtonText}>Delete</Text>
					</TouchableOpacity>
				</View>
			)}
			<TextInput
				style={styles.titleInput}
				placeholder="Word"
				placeholderTextColor="#666"
				value={noteTitle}
				onChangeText={setNoteTitle}
			/>
			<TextInput
				style={styles.bodyInput}
				placeholder="Meaning"
				placeholderTextColor="#666"
				value={noteBody}
				multiline
				numberOfLines={4}
				onChangeText={setNoteBody}
			/>
			<TouchableOpacity
				style={styles.button}
				onPress={isEditMode ? saveNote : addNote}
			>
				<Text style={styles.buttonText}>{isEditMode ? "Save" : "Add"}</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f2f2f7",
		alignItems: "center",
		justifyContent: "flex-start",
		paddingTop: 20,
		width: "100%",
	},
	titleInput: {
		width: "90%",
		height: 50,
		borderColor: "#fff",
		borderWidth: 1,
		borderRadius: 5,
		marginBottom: 15,
		paddingHorizontal: 10,
		backgroundColor: "#fff",
		fontSize: 16,
	},
	bodyInput: {
		width: "90%",
		height: 150, // Larger height for body input
		borderColor: "#fff",
		borderWidth: 1,
		borderRadius: 5,
		marginBottom: 15,
		paddingHorizontal: 10,
		backgroundColor: "#fff",
		fontSize: 16,
		textAlignVertical: "top",
	},
	button: {
		width: "90%",
		padding: 15,
		backgroundColor: "#B31D1D", // Consistent button color
		borderRadius: 5,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 10,
	},
	buttonText: {
		color: "white",
		fontSize: 16,
	},

	header: {
		width: "90%",
		alignSelf: "center",
		marginBottom: 10,
	},
	deleteButton: {
		alignSelf: "flex-end",
		padding: 5,
	},
	deleteButtonText: {
		color: "#B31D1D",
		fontSize: 14,
	},
});

export default NewNote;
