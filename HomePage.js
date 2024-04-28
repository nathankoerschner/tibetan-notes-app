import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import firestore from "@react-native-firebase/firestore";
import { useAuth } from "./AuthContext";
import { useNavigation } from "@react-navigation/native";

function HomePage() {
	const { user } = useAuth();
	const navigation = useNavigation();
	const [collections, setCollections] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (user) {
			const collectionRef = firestore()
				.collection("Users")
				.doc(user.uid)
				.collection("Collections");
			collectionRef
				.get()
				.then((querySnapshot) => {
					const userCollections = querySnapshot.docs.map((doc) => ({
						id: doc.id,
						title: doc.data().title,
					}));
					setCollections(userCollections);
					setLoading(false);
				})
				.catch((error) => {
					console.error("Error fetching collections: ", error);
					setLoading(false);
				});
		}
	}, [user]);

	const handlePressCollection = (collectionId = null) => {
		navigation.navigate("Dictionary", { currentCollection: collectionId });
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => navigation.navigate("Login")}
				style={styles.topLeftTextButton}
			>
				<Text style={styles.topLeftTextButtonText}>Settings</Text>
			</TouchableOpacity>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Collections</Text>
			</View>
			<ScrollView style={styles.collectionContainer}>
				{collections.map((collection) => (
					<TouchableOpacity
						key={collection.id}
						style={styles.blueCollectionItem}
						onPress={() => handlePressCollection(collection.id)}
					>
						<Text style={styles.collectionText}>{collection.title}</Text>
					</TouchableOpacity>
				))}
				<TouchableOpacity
					style={styles.redCollectionItem}
					onPress={() => handlePressCollection()}
				>
					<Text style={styles.collectionText}>All Words</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FAFAFA",
	},
	header: {
		padding: 24,
		backgroundColor: "#FFFFFF",
		borderBottomWidth: 1,
		borderBottomColor: "#F0F0F2",
		alignItems: "center",
	},
	headerTitle: {
		fontSize: 20,
		fontWeight: "bold",
	},
	collectionContainer: {
		padding: 20,
	},
	blueCollectionItem: {
		backgroundColor: "#0F2497",
		padding: 20,
		borderRadius: 5,
		marginBottom: 10,
	},
	redCollectionItem: {
		backgroundColor: "#B31D1D",
		padding: 20,
		borderRadius: 5,
		marginBottom: 10,
	},
	collectionText: {
		color: "#FFFFFF",
		fontSize: 16,
		textAlign: "center",
	},

	topLeftTextButton: {
		position: "absolute", // Position it over everything else
		top: 12, // Distance from the top of the container

		left: 8, // Distance from the left of the container
		padding: 8, // Padding inside the button
		borderRadius: 5, // Rounded corners
		zIndex: 1, // Make sure it's above other elements
	},
	topLeftTextButtonText: {
		fontSize: 12, // Adjust as needed
	},
});

export default HomePage;
