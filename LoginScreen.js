import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	Platform,
	ActivityIndicator,
} from "react-native";
import { useAuth } from "./AuthContext"; // Import the useAuth hook

export default function LoginScreen({ navigation }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { login, logout, user } = useAuth(); // Use the useAuth hook to access authentication methods and user state

	useEffect(() => {
		if (user) {
			navigation.navigate("HomePage");
		}
	}, [user, navigation]);

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
					<>
						<View>
							<Text>Welcome, {user.email}</Text>

							<TouchableOpacity
								style={styles.button}
								onPress={() => navigation.navigate("HomePage")}
							>
								<Text style={styles.buttonText}>Open Home Page</Text>
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
							onChangeText={setEmail}
						/>
						<TextInput
							style={styles.input}
							placeholder="Password"
							secureTextEntry
							value={password}
							onChangeText={setPassword}
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

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#B31D1D",
		padding: 10,
		borderRadius: 5,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 10,
		minWidth: 250,
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
		color: "#B31D1D",
	},
	input: {
		minWidth: 250,
		width: "100%",
		height: 40,
		borderColor: "#fff",
		backgroundColor: "#fff",
		borderWidth: 1,
		borderRadius: 5,
		marginBottom: 15,
		paddingHorizontal: 10,
	},
	logoutButton: {
		position: "absolute",
		top: 10,
		left: 10,
	},
	logoutButtonText: {
		color: "#B31D1D",
		fontSize: 16,
	},
});
