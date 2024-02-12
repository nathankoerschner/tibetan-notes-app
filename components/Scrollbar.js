import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles";

const Scrollbar = ({ library, onItemPress }) => {
	// Initialize state with the first item's title, assuming the library is not empty
	const [currentVisibleItem, setCurrentVisibleItem] = useState(
		library[0]?.title || ""
	);

	useEffect(() => {
		// Reset the currentVisibleItem when the library changes
		setCurrentVisibleItem(library[0]?.title || "");
	}, [library]);

	const handleItemPress = (index) => {
		setCurrentVisibleItem(library[index].title);
		if (onItemPress) {
			onItemPress(index);
		}
	};

	return (
		<View style={styles.scrollbarContainer}>
			{library.map((section, index) => (
				<TouchableOpacity
					key={index}
					onPress={() => handleItemPress(index)}
					style={styles.scrollbarItem}
				>
					<Text
						style={{
							color:
								section.title === currentVisibleItem ? "#B31D1D" : "#636363",
							fontSize: 50,
							fontWeight: section.title === currentVisibleItem ? "900" : "100",
						}}
					>
						{section.title}
					</Text>
				</TouchableOpacity>
			))}
		</View>
	);
};

export default Scrollbar;
