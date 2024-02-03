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
	const [currentVisibleItem, setCurrentVisibleItem] = useState(null);
	// Handler for onViewableItemsChanged
	const handleViewableItemsChanged = useCallback(({ viewableItems }) => {
		// Assuming each item has a unique id
		if (viewableItems.length > 0) {
			const firstViewItem = viewableItems[0].item;
			setCurrentVisibleItem(firstViewItem.title); // Update the state with the id of the first viewable item
		}
	}, []);
	const flatListRef = useRef();

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
		({ item }) => (
			<Section
				section={item}
				navigation={navigation}
				style={{ marginVertical: "15%" }}
			/>
		),
		[navigation]
	);

	const tibetanCharacters = "ཀཁགངཅཆཇཉཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤསཧཨ";

	const scrollToSection = useCallback((sectionIndex, title) => {
		// Set the current visible title based on the clicked section
		// setCurrentVisibleItem(title);

		flatListRef.current?.scrollToIndex({
			animated: false,
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
					<Text
						style={{
							color: section.title === currentVisibleItem ? "#B31D1D" : "black", // Conditional text color
							fontSize: 50,
						}}
					>
						{section.title}
					</Text>
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
			<TouchableOpacity
				onPress={() => navigation.navigate("Login")}
				style={styles.logoutButton}
			>
				<Text style={styles.logoutButtonText}>Settings</Text>
			</TouchableOpacity>
			<View style={styles.leftSidebar}>{renderScrollbar()}</View>
			<FlatList
				ref={flatListRef}
				data={library}
				renderItem={renderSection}
				onViewableItemsChanged={handleViewableItemsChanged}
				keyExtractor={(item, index) => `section-${index}`}
				viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
				ListFooterComponent={<View style={{ height: 300 }} />}
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
		borderColor: "#fff", // Example border color
		borderWidth: 1, // Example border width
		shadowOffset: { width: 0, height: 2 },
	},

	sectionContainer: {
		padding: 10, // Example padding
		paddingHorizontal: 60, // Example padding
		paddingBottom: 50, // Example padding
		marginVertical: 20,

		marginHorizontal: 0, // Add horizontal margin
		alignContent: "center",
		alignSelf: "center",

		backgroundColor: "#fff", // Example background color
		borderColor: "#fff", // Example border color

		borderRadius: 15, // Adjust for desired roundness
	},
	itemContainer: {
		width: "100%", // Specific width
		marginVertical: 10,
		alignSelf: "center",
		padding: 10,
		minWidth: "85%", // Minimum width
		backgroundColor: "#fff",
		borderRadius: 5,
		borderTopColor: "#f2f2f7",
		borderTopWidth: 1,
	},
	sectionHeader: {
		alignSelf: "flex-start", // Stretch to fill the container

		// minWidth: "10%", // Minimum width

		paddingVertical: 5, // Vertical padding for top and bottom
		paddingTop: 20, // Add extra padding to the top

		margin: 5, // Optional margin for spacing around the box
	},

	sectionHeaderText: {
		fontWeight: "bold",
		fontSize: 100,
		textAlign: "center", // Ensure text is aligned to the left
		alignSelf: "stretch", // Align self to the start (
	},
	itemTitle: {
		fontWeight: "bold",
		fontSize: 30,
		marginBottom: 5,
	},
	itemBody: {
		fontSize: 24,
		fontWeight: "200",
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		padding: 0,
	},
	addButton: {
		backgroundColor: "#B31D1D", // Consistent button color
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
		width: "80%", // Take full width of the sidebar
		maxHeight: "100%", // Limit height to the sidebar
		// Keep other styles as is,
		// maxWidth: "50%",
		maxHeight: "88%",

		// Adjust the width as needed
	},
	scrollbarItem: {
		padding: 13,
		width: 60,
		alignSelf: "flex-start",
	},

	logoutButton: {
		position: "absolute", // Position it over everything else
		bottom: 10, // Distance from the top of the container

		left: 10, // Distance from the left of the container
		padding: 8, // Padding inside the button
		borderRadius: 5, // Rounded corners
		zIndex: 1, // Make sure it's above other elements
	},
	logoutButtonText: {
		fontSize: 16, // Adjust as needed
	},
});

export default LibraryScreen;
