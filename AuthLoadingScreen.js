import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { useAuth } from "./AuthContext";

const AuthLoadingScreen = ({ navigation }) => {
	const { user, initializing } = useAuth(); // Destructure initializing and user directly

	useEffect(() => {
		if (initializing) {
			// If still initializing, do nothing yet
			return;
		}

		// Once initializing is complete, navigate based on the user's status
		navigation.replace(user ? "Dictionary" : "Login");
	}, [user, initializing, navigation]);

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<ActivityIndicator size="large" />
		</View>
	);
};

export default AuthLoadingScreen;
