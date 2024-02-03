import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	KeyboardAvoidingView,
	Platform,
} from "react-native";
import { useAuth } from "./AuthContext"; // Import the useAuth hook

export default function LoginScreen({ navigation }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { login, logout, user } = useAuth(); // Use the useAuth hook to access authentication methods and user state

	const handleLogin = async () => {
		try {
			await login(email, password);
		} catch (error) {
			console.error("Login failed:", error);
		}
	};

	const handleLogout = async () => {
		try {
			await logout();
		} catch (error) {
			console.error("Logout failed:", error);
		}
	};

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<View style={styles.innerContainer}>
				{user ? (
					<View>
						<Text>Welcome, {user.email}</Text>
						<Button
							style={styles.text}
							title="Go To Dictionary"
							onPress={() => navigation.navigate("Dictionary")}
						/>
						<Button title="Logout" style={styles.text} onPress={handleLogout} />
					</View>
				) : (
					<View>
						<Text style={styles.title}>Login</Text>
						<TextInput
							style={styles.input}
							placeholder="Email"
							value={email}
							onChangeText={(text) => setEmail(text)}
						/>
						<TextInput
							style={styles.input}
							placeholder="Password"
							secureTextEntry
							value={password}
							onChangeText={(text) => setPassword(text)}
						/>
						<Button style={styles.title} title="Login" onPress={handleLogin} />
					</View>
				)}
			</View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f2f2f7",
	},
	innerContainer: {
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 20,
		flex: 1,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
		color: "#B31D1D", // Updated color for title
	},

	input: {
		minWidth: 250, // Set minimum width for the input
		width: "100%",
		height: 40,
		borderColor: "#fff", // Updated border color
		backgroundColor: "#fff", // Updated background color
		borderWidth: 1,
		borderRadius: 5, // Rounded corners for inputs
		marginBottom: 15,
		paddingHorizontal: 10,
	},
	button: {
		backgroundColor: "#fff", // Updated button color
		padding: 10,
		borderRadius: 5, // Rounded corners for button
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 10,
	},
	buttonText: {
		color: "white",
		fontSize: 16,
	},
});
