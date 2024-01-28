import React, { useRef, useState, useEffect } from "react";
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	FlatList,
	Modal,
	SectionList,
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
	const groupNotesByInitialCharacter = (notes) => {
		const grouped = {};
		notes.forEach((note) => {
			// Assuming titles are non-empty and in Tibetan
			const initialChar = note.title.charAt(0);
			if (!grouped[initialChar]) {
				grouped[initialChar] = [];
			}
			grouped[initialChar].push(note);
		});
		return Object.keys(grouped).map((key) => ({
			title: key,
			data: grouped[key],
		}));
	};

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

				setLibrary(groupNotesByInitialCharacter(notesArray));
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
	const renderSectionHeader = ({ section: { title } }) => (
		<View style={styles.sectionHeader}>
			<Text style={styles.sectionHeaderText}>{title}</Text>
		</View>
	);

	const flatListRef = useRef();

	const scrollToSection = (sectionIndex) => {
		flatListRef.current.scrollToIndex({
			animated: true,
			index: sectionIndex,
			viewPosition: 0, // Scrolls to the top of the item at the specified index
		});
	};

	const renderScrollbar = () => (
		<View style={styles.scrollbarContainer}>
			{library.map((section, index) => (
				<TouchableOpacity
					key={index}
					onPress={() => scrollToSection(index)}
					style={styles.scrollbarItem}
				>
					<Text style={styles.scrollbarItemText}>{section.title}</Text>
				</TouchableOpacity>
			))}
		</View>
	);
	const Section = ({ section }) => (
		<View style={styles.sectionContainer}>
			<View style={styles.sectionHeader}>
				<Text style={styles.sectionHeaderText}>{section.title}</Text>
			</View>
			{section.data.map((item, index) => (
				<TouchableOpacity
					key={index}
					style={styles.itemContainer}
					onPress={() => navigation.navigate("NewNote", { note: item })}
				>
					<Text style={styles.itemTitle}>{item.title}</Text>
					<Text style={styles.itemBody}>{item.body}</Text>
				</TouchableOpacity>
			))}
		</View>
	);

	// ... inside your return statement
	return (
		<View style={styles.container}>
			{/* <SectionList
				ref={sectionListRef}
				contentContainerStyle={styles.sectionList}
				sections={library}
				renderItem={renderNote}
				renderSectionHeader={renderSectionHeader}
				keyExtractor={(item, index) => item.id + index}
			/> */}
			{/* <FlatList
				contentContainerStyle={styles.flatList}
				data={library}
				renderItem={renderNote}
				keyExtractor={(item, index) => index.toString()}
			/> */}

			<FlatList
				ref={flatListRef} // Set the ref here
				data={library}
				renderItem={({ item }) => <Section section={item} />}
				keyExtractor={(item, index) => `section-${index}`}
				// Other props as needed
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
			{renderScrollbar()}
		</View>
	);
}

const styles = StyleSheet.create({
	sectionContainer: {
		borderWidth: 1,
		padding: 10, // Example padding
		paddingBottom: 50, // Example padding
		margin: 40,
		backgroundColor: "#f2f2f7", // Example background color
		borderColor: "#808080", // Example border color
		borderWidth: 1, // Example border width
		borderRadius: 5,
		shadowColor: "#808080",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	itemContainer: {
		width: "90%", // Specific width
		margin: 10,

		padding: 10,
		minWidth: "90%", // Minimum width
		marginLeft: 70,
		marginLeft: 70,
		backgroundColor: "#fff",
		borderRadius: 5,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	sectionHeader: {
		alignSelf: "flex-start", // Stretch to fill the container
		backgroundColor: "#f2f2f7", //"#d3d3d3",
		// minWidth: "10%", // Minimum width

		paddingHorizontal: 15, // Adjust padding as needed
		paddingVertical: 5, // Vertical padding for top and bottom
		borderRadius: 10, // Adjust for desired roundness
		// Remove alignItems and justifyContent if not needed
		margin: 5, // Optional margin for spacing around the box
	},

	sectionHeaderText: {
		fontWeight: "bold",
		fontSize: 60,
		textAlign: "center", // Ensure text is aligned to the left
		alignSelf: "stretch", // Align self to the start (
	},
	itemTitle: {
		fontWeight: "bold",
		fontSize: 20,
		marginBottom: 5,
	},
	itemBody: {
		fontSize: 16,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		padding: 0,
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
	scrollbarContainer: {
		position: "absolute",
		left: 10,
		top: 0,
		bottom: 0,
		justifyContent: "center",
		alignItems: "center",
		leftPadding: 25,

		// Adjust the width as needed
	},
	scrollbarItem: {
		padding: 5,
	},
});

export default LibraryScreen;
