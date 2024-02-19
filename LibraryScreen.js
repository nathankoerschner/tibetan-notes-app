import React, { useRef, useState, useEffect, useCallback } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

import firestore from "@react-native-firebase/firestore";
import { useAuth } from "./AuthContext";
import tibetanSort from "./tibetan-sort-js";
import styles from "./styles";

import Scrollbar from "./components/Scrollbar";
import ItemsView from "./components/ItemsView";

function LibraryScreen({ navigation, route }) {
	const { user } = useAuth();
	const [library, setLibrary] = useState([]);
	const [currentLetter, setcurrentLetter] = useState(null);
	const { currentCollection } = route.params;

	const handleViewableItemsChanged = useCallback(({ viewableItems }) => {
		if (viewableItems.length > 0) {
			setcurrentLetter({
				id: viewableItems[0].item.title,
			});
		}
	}, []);

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
	// This should filter to the current user's notes in the current deck
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

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => navigation.navigate("Login")}
				style={styles.logoutButton}
			>
				<Text style={styles.logoutButtonText}>Settings</Text>
			</TouchableOpacity>
			<View style={styles.leftSidebar}>
				<Scrollbar
					items={library.map((section) => section.title)}
					selectedItem={currentLetter?.id}
					onItemPress={setcurrentLetter}
				/>
			</View>
			<ItemsView
				library={library}
				navigation={navigation}
				currentLetter={currentLetter?.index}
				handleViewableItemsChanged={handleViewableItemsChanged}
			/>

			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.addButton}
					onPress={() =>
						navigation.navigate("Note", {
							currentCollection: currentCollection,
						})
					}
				>
					<Text style={styles.addButtonText}>+</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default LibraryScreen;
