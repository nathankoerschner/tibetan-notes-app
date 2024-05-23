import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { useAuth } from "./AuthContext"; // Import the useAuth hook

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, logout, user, loginAnonymously, createUser } = useAuth();
  // Use the useAuth hook to access authentication methods and user state

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

  const handleCreateUser = async () => {
    try {
      await createUser(email, password);
    } catch (error) {
      console.error("Create User failed:", error);
    }
  };

  const handleLoginAnonymously = async () => {
    try {
      await loginAnonymously();
    } catch (error) {
      console.error("Login Anonymously failed:", error);
    }
  };

  const handleDeleteUser = async () => {
    Alert.prompt(
      "Confirm Deletion",
      'Type "DELETE" to confirm',
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: async (confirm) => {
            if (confirm === "DELETE") {
              try {
                await user.delete();
              } catch (error) {
                console.error("Delete User failed:", error);
              }
            }
          },
        },
      ],
      "plain-text",
    );
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
            <TouchableOpacity
              style={styles.deleteUserButton}
              onPress={handleDeleteUser}
            >
              <Text style={styles.deleteUserButtonText}>Delete Account</Text>
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
            <TouchableOpacity style={styles.button} onPress={handleCreateUser}>
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLoginAnonymously}>
              <Text style={styles.logoutButtonText}>
                Use Without An Account
              </Text>
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
    textAlign: "center",
  },
  deleteUserButton: {
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  deleteUserButtonText: {
    color: "#B31D1D",
    fontSize: 16,
    textAlign: "center",
  },
});
