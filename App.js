// TODO:
// Use a UI library to get the various components
// Use a library to make sure that the storage of the notes persists
// Include the headings of each of the Alphabetical sections

import React, { useState, useContext } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
	StatusBar,
	StyleSheet,
	Text,
	View,
	Button,
	Alert,
	FlatList,
	TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import NotesContext, { NotesProvider } from "./NotesContext"; // Import NotesContext and NotesProvider
import NewNote from "./NewNote"; // Adjust the path as per your file structure
import HomeScreen from "./HomeScreen"; // Adjust the path as per your file structure

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<NotesProvider>
				<Stack.Navigator initialRouteName="Home">
					<Stack.Screen name="Home" component={HomeScreen} />
					<Stack.Screen name="NewNote" component={NewNote} />
				</Stack.Navigator>
			</NotesProvider>
		</NavigationContainer>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
	},
	addButton: {
		backgroundColor: "blue",
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
	note: {
		margin: 10,
		padding: 10,
		backgroundColor: "#f9f9f9",
	},
});
