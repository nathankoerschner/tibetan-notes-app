import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
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
		<View style={styles.container}>
			{user ? (
				<View>
					<Text>Welcome, {user.email}</Text>
					<Button
						title="Go To Library"
						onPress={() => navigation.navigate("Library")}
					/>
					<Button title="Logout" onPress={handleLogout} />
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
					<Button title="Login" onPress={handleLogin} />
				</View>
			)}
		</View>
	);
}

// ... rest of your code
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
