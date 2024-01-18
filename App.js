import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import NotesContext, { NotesProvider } from "./NotesContext";
import NewNote from "./NewNote";
import HomeScreen from "./HomeScreen";
import auth from "@react-native-firebase/auth";
import { AuthProvider } from "./AuthContext"; // Import the AuthProvider
import LoginScreen from "./LoginScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<AuthProvider>
				<NotesProvider>
					<Stack.Navigator initialRouteName="Login">
						<Stack.Screen name="Login" component={LoginScreen} />
						<Stack.Screen name="Home" component={HomeScreen} />
						<Stack.Screen name="NewNote" component={NewNote} />
					</Stack.Navigator>
				</NotesProvider>
			</AuthProvider>
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
	container: {
		flex: 1,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
	},
	input: {
		width: "100%",
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		marginBottom: 10,
		paddingHorizontal: 10,
	},
	error: {
		color: "red",
		marginTop: 10,
	},
});
