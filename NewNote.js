import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	View,
	TextInput,
	TouchableOpacity,
	Text,
	ActivityIndicator,
} from "react-native";
import firestore from "@react-native-firebase/firestore";
import { useAuth } from "./AuthContext";
import tibetanSort from "./tibetan-sort-js";

function NewNote({ navigation, route }) {
	const { currentCollection } = route.params;
	const existingNote = route.params?.note;

	const [noteTitle, setNoteTitle] = useState(existingNote?.title || "");
	const [noteBody, setNoteBody] = useState(existingNote?.body || "");
	const [collections, setCollections] = useState([]);
	const [selectedCollections, setSelectedCollections] = useState(
		existingNote?.collections || [currentCollection]
	);
	const [isLoading, setIsLoading] = useState(true);
	const [isEditMode, setIsEditMode] = useState(!!existingNote);
	const { user } = useAuth();
	console.log("the collection", selectedCollections);

	useEffect(() => {
		if (user) {
			const collectionRef = firestore()
				.collection("Users")
				.doc(user.uid)
				.collection("Collections");

			collectionRef
				.get()
				.then((querySnapshot) => {
					const userCollections = querySnapshot.docs.map((doc) => ({
						id: doc.id,
						title: doc.data().title,
					}));
					setCollections(userCollections);
					setIsLoading(false);
				})
				.catch((error) => {
					console.error("Error fetching collections: ", error);
					setIsLoading(false);
				});
		}
	}, [user]);

	const toggleCollection = (collectionId) => {
		if (selectedCollections.includes(collectionId)) {
			setSelectedCollections(
				selectedCollections.filter((id) => id !== collectionId)
			);
		} else {
			setSelectedCollections([...selectedCollections, collectionId]);
		}
	};

	const addOrUpdateNote = (isNew) => {
		if (noteTitle.trim().length === 0) {
			return;
		}

		const rootLetter = tibetanSort.determineRootLetter(noteTitle) ?? "*";
		const collectionRef = firestore()
			.collection("Users")
			.doc(user.uid)
			.collection("Notes");

		const data = {
			title: noteTitle.trim(),
			body: noteBody,
			collections: selectedCollections,
			rootLetter,
		};

		if (isNew) {
			collectionRef.add(data);
		} else {
			collectionRef.doc(existingNote.id).update(data);
		}

		setNoteTitle("");
		setNoteBody("");
		navigation.goBack();
	};

	if (!user || isLoading) {
		return <ActivityIndicator size="large" color="#0000ff" />;
	}

	return (
		<View style={styles.container}>
			{isEditMode && (
				<View style={styles.header}>
					<TouchableOpacity
						style={styles.deleteButton}
						onPress={() => addOrUpdateNote(false)}
					>
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
			<View style={styles.collectionContainer}>
				{collections.map((collection) => (
					<TouchableOpacity
						key={collection.id}
						style={[
							styles.tag,
							{
								backgroundColor: selectedCollections.includes(collection.id)
									? "#B31D1D"
									: "#ddd",
							},
						]}
						onPress={() => toggleCollection(collection.id)}
					>
						<Text style={styles.tagText}>{collection.title}</Text>
					</TouchableOpacity>
				))}
			</View>
			<TouchableOpacity
				style={styles.button}
				onPress={() => addOrUpdateNote(!isEditMode)}
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
		height: 150,
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
		backgroundColor: "#B31D1D",
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
	collectionContainer: {
		flexDirection: "row",
		width: "90%",
		marginBottom: 15,
		flexWrap: "wrap",
		alignItems: "flex-start",
		justifyContent: "flex-start",
	},
	tag: {
		padding: 8,
		borderRadius: 5,
		margin: 5,
	},
	tagText: {
		color: "white",
		fontSize: 14,
	},
});

export default NewNote;
