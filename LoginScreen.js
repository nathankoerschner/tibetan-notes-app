import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity, // Import TouchableOpacity
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
			// navigation.navigate("Login");
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
					<>
						<View>
							<Text>Welcome, {user.email}</Text>
							<TouchableOpacity
								style={styles.button}
								onPress={() => navigation.navigate("Dictionary")}
							>
								<Text style={styles.buttonText}>Go To Dictionary</Text>
							</TouchableOpacity>
						</View>
						<TouchableOpacity
							style={styles.logoutButton}
							onPress={handleLogout}
						>
							<Text style={styles.logoutButtonText}>Logout</Text>
						</TouchableOpacity>
					</>
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
						<TouchableOpacity style={styles.button} onPress={handleLogin}>
							<Text style={styles.buttonText}>Login</Text>
						</TouchableOpacity>
					</View>
				)}
			</View>
		</KeyboardAvoidingView>
	);
}

// Stylesheet update is mainly to ensure the `button` and `buttonText` styles are correctly applied.
const styles = StyleSheet.create({
	// ... other styles remain unchanged
	button: {
		backgroundColor: "#B31D1D", // Set button color to B31D1D
		padding: 10,
		borderRadius: 5,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 10,
		marginTop: 10,
		minWidth: 250, // Ensure button has a minimum width
	},
	buttonText: {
		color: "white",
		fontSize: 16,
	},
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
	logoutButton: {
		position: "absolute", // Position logout text absolutely
		top: 10, // Distance from top
		left: 10, // Distance from left
		// Additional styling as needed
	},
	logoutButtonText: {
		color: "#B31D1D", // Set the text color to red
		fontSize: 16, // Adjust the font size as needed
	},
});
