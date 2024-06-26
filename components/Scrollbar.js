import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "../styles";

const Scrollbar = ({ items, selectedItem, onItemPress }) => {
  return (
    <ScrollView style={styles.scrollbarContainer} contentContainerStyle={styles.scrollbarContentContainer}>
      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onItemPress({ item, index })}
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
    </ScrollView>
  );
};

export default Scrollbar;
