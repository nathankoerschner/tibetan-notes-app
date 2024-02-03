import React, { useEffect, useContext } from "react";
import { View, ActivityIndicator } from "react-native";
import { useAuth } from "./AuthContext";

const AuthLoadingScreen = ({ navigation }) => {
	const authContext = useAuth();

	// Directly access initializing and user from the authContext
	useEffect(() => {
		if (!authContext) {
			// If authContext is null, which means initializing is true, do nothing yet
			return;
		}

		const { user } = authContext;
		// Once initializing is complete, navigate based on the user's status
		navigation.replace(user ? "Dictionary" : "Login");
	}, [authContext, navigation]);

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<ActivityIndicator size="large" />
		</View>
	);
};

export default AuthLoadingScreen;
