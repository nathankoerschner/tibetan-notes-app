import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles";

const Scrollbar = ({ items, selectedItem, onItemPress }) => {
	return (
		<View style={styles.scrollbarContainer}>
			{items.map((item, index) => (
				<TouchableOpacity
					key={index}
					onPress={() => onItemPress(index)}
					style={styles.scrollbarItem}
				>
					<Text
						style={{
							color: item === selectedItem ? "#B31D1D" : "#636363",
							fontSize: 50,
							fontWeight: item === selectedItem ? "900" : "100",
						}}
					>
						{item}
					</Text>
				</TouchableOpacity>
			))}
		</View>
	);
};

export default Scrollbar;
