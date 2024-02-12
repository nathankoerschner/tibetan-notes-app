import React, { useRef, useState, useEffect, useCallback } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

import firestore from "@react-native-firebase/firestore";
import { useAuth } from "./AuthContext";
// Use require instead of import
import tibetanSort from "./tibetan-sort-js";
import styles from "./styles";

import Section from "./components/Section";

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

export default LibraryScreen;
