import React, { useRef, useState, useEffect, useCallback } from "react";
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
	const { user } = useAuth();
	const [library, setLibrary] = useState([]);
	const flatListRef = useRef();

	if (!user) {
		return null;
	}

	const groupNotesByInitialCharacter = useCallback((notes) => {
		const grouped = notes.reduce((acc, note) => {
			const initialChar = tibetanSort.determineRootLetter(note.title) ?? " ";
			acc[initialChar] = acc[initialChar] || [];
			acc[initialChar].push(note);
			return acc;
		}, {});

		return Object.keys(grouped)
			.sort()
			.map((key) => ({ title: key, data: grouped[key] }));
	}, []);

	// Update the library state with the collected notes
	useEffect(() => {
		const subscriber = firestore()
			.collection("Users")
			.doc(user.uid)
			.collection("Notes")
			.onSnapshot((querySnapshot) => {
				const notesArray = querySnapshot.docs.map((doc) => ({
					...doc.data(),
					id: doc.id,
				}));
				notesArray.sort((a, b) => tibetanSort.compare(a.title, b.title));
				setLibrary(groupNotesByInitialCharacter(notesArray));
			});

		return () => subscriber();
	}, [groupNotesByInitialCharacter, user.uid]);
	const renderSection = useCallback(
		({ item }) => <Section section={item} navigation={navigation} />,
		[navigation]
	);

	const tibetanCharacters = "ཀཁགངཅཆཇཉཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤསཧཨ";

	const scrollToSection = useCallback((sectionIndex) => {
		flatListRef.current?.scrollToIndex({
			animated: true,
			index: sectionIndex,
			viewPosition: 0,
		});
	}, []);

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
	const Section = ({ section, navigation }) => (
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
			<View style={styles.leftSidebar}>{renderScrollbar()}</View>
			<FlatList
				ref={flatListRef}
				data={library}
				renderItem={renderSection}
				keyExtractor={(item, index) => `section-${index}`}
			/>

			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.addButton}
					onPress={() => navigation.navigate("NewNote")}
				>
					<Text style={styles.addButtonText}>+</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row", // Align children side by side
		flex: 1, // Take full height of the screen
	},
	leftSidebar: {
		backgroundColor: "white", // Gray background
		width: "30%", // Adjust width as needed
		justifyContent: "center",
		alignItems: "center",
		borderColor: "#808080", // Example border color
		borderWidth: 1, // Example border width
		borderRadius: 2,
		shadowColor: "#808080",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},

	sectionContainer: {
		borderWidth: 1,
		padding: 10, // Example padding
		paddingBottom: 50, // Example padding
		margin: 40,
		width: "60%",
		alignContent: "center",
		alignSelf: "center",
		marginRight: "10%",
		maxWidth: "75%",
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
		width: "70%", // Specific width
		margin: 10,
		alignSelf: "center",
		padding: 10,
		minWidth: "70%", // Minimum width
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
	scrollbarContainer: {
		marginVertical: "4%",
		alignSelf: "center",
		flexDirection: "row",
		flexWrap: "wrap",
		// Other styles as needed

		top: 0,
		bottom: 0,
		justifyContent: "center",
		alignItems: "center",
		// width: "40%"
		width: "70%", // Take full width of the sidebar
		maxHeight: "100%", // Limit height to the sidebar
		// Keep other styles as is,
		// maxWidth: "50%",
		maxHeight: "88%",

		// Adjust the width as needed
	},
	scrollbarItem: {
		padding: 13,
		width: 50,
		alignSelf: "flex-start",
	},
	scrollbarItemText: {
		fontSize: 44,
	},
});

export default LibraryScreen;
