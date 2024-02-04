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
	if (!user) {
		return null;
	}

	const groupNotesByInitialCharacter = useCallback((notes) => {
		const grouped = notes.reduce((acc, note) => {
			const initialChar = tibetanSort.determineRootLetter(note.title) ?? "*";
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
							color:
								section.title === currentVisibleItem ? "#B31D1D" : "#636363", // Conditional text color
							fontSize: 50,
							fontWeight: section.title === currentVisibleItem ? "900" : "100",
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
					onPress={() => navigation.navigate("Note", { note: item })}
				>
					<Text style={styles.itemTitle}>{item.title}</Text>
					<Text style={styles.itemBody} numberOfLines={1} ellipsizeMode="tail">
						{item.body}
					</Text>
				</TouchableOpacity>
			))}
		</View>
	);

	const HEIGHT_OF_SINGLE_NOTE = 120;
	const HEIGHT_OF_SECTION_HEADER = 155;
	const TOP_MARGIN = 20;
	const BOTTOM_MARGIN = 20;
	const TOP_PADDING_HEIGHT = 10;
	const BOTTOM_PADDING = 50;

	// Function to calculate the total height of a section based on the number of items it contains
	const calculateSectionHeight = (itemCount) => {
		return (
			TOP_MARGIN +
			HEIGHT_OF_SECTION_HEADER +
			HEIGHT_OF_SINGLE_NOTE * itemCount +
			TOP_PADDING_HEIGHT +
			BOTTOM_PADDING +
			BOTTOM_MARGIN +
			10
		);
	};

	// getItemLayout function for FlatList
	const getItemLayout = (data, index) => {
		// Calculate the offset up to this section
		let offset = 0;
		for (let i = 0; i < index; i++) {
			offset += calculateSectionHeight(data[i].data.length);
		}

		const length = calculateSectionHeight(data[index].data.length);
		return { length, offset, index };
	};
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
				getItemLayout={getItemLayout}
				onScrollToIndexFailed={(info) => {
					// Attempt to scroll to the bottom of the list as a fallback
					flatListRef.current?.scrollToEnd({ animated: true });
				}}
			/>

			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.addButton}
					onPress={() => navigation.navigate("Note")}
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
		width: "85%", // Specific width
		height: 100, // Fixed height
		maxHeight: 100, // Max height
		minHeight: 100, // Min height
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
		top: 0,
		bottom: 0,
		justifyContent: "center",
		alignItems: "center",
		width: "80%",
		maxHeight: "100%",
		maxHeight: "88%",
	},
	scrollbarItem: {
		padding: 13,
		width: 62,
		alignSelf: "flex-start",
	},

	logoutButton: {
		position: "absolute", // Position it over everything else
		top: 12, // Distance from the top of the container

		left: 8, // Distance from the left of the container
		padding: 8, // Padding inside the button
		borderRadius: 5, // Rounded corners
		zIndex: 1, // Make sure it's above other elements
	},
	logoutButtonText: {
		fontSize: 12, // Adjust as needed
	},
});

export default LibraryScreen;
