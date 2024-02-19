import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import NewNote from "./NewNote";
import LibraryScreen from "./LibraryScreen";
import { AuthProvider } from "./AuthContext";
import LoginScreen from "./LoginScreen";
import AuthLoadingScreen from "./AuthLoadingScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<AuthProvider>
				<Stack.Navigator initialRouteName="Login">
					<Stack.Screen
						name="AuthLoading"
						component={AuthLoadingScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Login"
						component={LoginScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Dictionary"
						component={LibraryScreen}
						options={{ headerShown: false }}
						initialParams={{ currentCollection: "allNotes" }}
					/>
					<Stack.Screen name="Note" component={NewNote} />
				</Stack.Navigator>
			</AuthProvider>
		</NavigationContainer>
	);
}
