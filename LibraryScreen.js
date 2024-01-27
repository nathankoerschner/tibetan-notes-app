import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	FlatList,
	Modal,
} from "react-native";

import firestore from "@react-native-firebase/firestore";
import { useAuth } from "./AuthContext";
// Use require instead of import
import tibetanSort from "./tibetan-sort-js";

function LibraryScreen({ navigation }) {
	const { user, logout } = useAuth();
	const [isModalVisible, setModalVisible] = useState(false);

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

	const tibetanCharacters = "ཀཁགངཅཆཇཉཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤསཧཨ";
	const halfLength = Math.ceil(tibetanCharacters.length / 2);

	const firstRowChars = tibetanCharacters.slice(0, halfLength).split("");
	const secondRowChars = tibetanCharacters.slice(halfLength).split("");

	const renderCharButtons = (chars) =>
		chars.map((char, index) => (
			<TouchableOpacity key={index} style={styles.charButton}>
				<Text style={styles.charButtonText}>{char}</Text>
			</TouchableOpacity>
		));

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
				contentContainerStyle={styles.flatList}
				data={library}
				renderItem={renderNote}
				keyExtractor={(item, index) => index.toString()}
			/>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.modalTriggerButton}
					onPress={() => setModalVisible(true)}
				>
					<Text style={styles.modalTriggerButtonText}>ཀ་ཁ་ག་༉</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.addButton}
					onPress={() => navigation.navigate("NewNote")}
				>
					<Text style={styles.addButtonText}>+</Text>
				</TouchableOpacity>
			</View>
			<Modal
				transparent={true}
				visible={isModalVisible}
				onRequestClose={() => setModalVisible(false)}
			>
				<TouchableOpacity
					style={styles.modalOverlay}
					activeOpacity={1}
					onPressOut={() => setModalVisible(false)}
				>
					<View style={styles.modalView} onStartShouldSetResponder={() => true}>
						{/* Modal Content */}
						<View style={styles.charBox}>
							<View style={styles.charRow}>
								{renderCharButtons(firstRowChars)}
							</View>
							<View style={styles.charRow}>
								{renderCharButtons(secondRowChars)}
							</View>
						</View>
					</View>
				</TouchableOpacity>
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f2f2f7",
		justifyContent: "flex-start",
		width: "100%",
		alignItems: "stretch", // Ensures children can fill the width
	},
	flatList: {
		borderWidth: 1,
		padding: 10, // Example padding
		paddingVertical: 50, // Example padding
		margin: 40,
		alignItems: "center", // Center items in the list
		backgroundColor: "#d3d3d3", // Example background color
		borderColor: "#808080", // Example border color
		borderWidth: 1, // Example border width
		borderRadius: 5,
		shadowColor: "#808080",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	noteContainer: {
		width: "90%", // Specific width
		margin: 10,
		minWidth: "90%", // Minimum width
		padding: 10,
		backgroundColor: "#fff",
		borderRadius: 5,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	noteTitle: {
		fontWeight: "bold",
		fontSize: 20,
		marginBottom: 5,
	},
	noteBody: {
		fontSize: 16,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
		padding: 10,
	},
	modalTriggerButton: {
		backgroundColor: "#007AFF", // Lighter blue background
		borderRadius: 20,
		paddingVertical: 10,
		height: 60,
		paddingHorizontal: 15,
		marginRight: 10,
		position: "absolute", // Positioning absolutely
		bottom: 20, // Same vertical position as addButton
		right: 90, // Adjust this value as needed to position the button
	},
	modalTriggerButtonText: {
		color: "white",
		fontSize: 28,
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
	charBox: {
		backgroundColor: "#f0f0f0", // Gray background
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		padding: 10,
		marginHorizontal: 10, // Add horizontal margin
	},
	charRow: {
		flexDirection: "row",
		justifyContent: "center",
		paddingVertical: 5,
	},
	charButton: {
		margin: 5,
		backgroundColor: "#007AFF",
		borderRadius: 5,
		padding: 10,
	},
	charButtonText: {
		color: "white",
		fontSize: 18,
	},
	modalOverlay: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
	},
	modalView: {
		backgroundColor: "white", // Non-transparent background for modal content
		borderRadius: 10,
		padding: 10,
		elevation: 5,
		// Add other styling as needed
	},
});

export default LibraryScreen;
