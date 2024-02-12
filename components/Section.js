import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles";

const Section = ({ section, navigation }) => (
	<View style={styles.sectionContainer}>
		<View style={styles.sectionHeader}>
			<Text style={styles.sectionHeaderText}>{section.title}</Text>
		</View>
		{section.data.map((item, index) => (
			<TouchableOpacity
				key={index}
				style={styles.itemContainer}
				onPress={() => navigation.navigate("Note", { note: item })}
			>
				<Text style={styles.itemTitle}>{item.title}</Text>
				<Text style={styles.itemBody} numberOfLines={1} ellipsizeMode="tail">
					{item.body}
				</Text>
			</TouchableOpacity>
		))}
	</View>
);

export default Section;
