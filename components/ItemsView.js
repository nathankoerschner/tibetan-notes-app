// ItemsView.js
import React, { useRef, useState, useEffect, useCallback } from "react";
import { View, FlatList, Text } from "react-native";
import Section from "./Section"; // Adjust path as necessary

const ItemsView = ({
  library,
  navigation,
  currentLetter,
  handleViewableItemsChanged,
}) => {
  const flatListRef = useRef();
  const scrollToLetter = useCallback(
    (letterIndex) => {
      if (
        typeof letterIndex === "number" &&
        letterIndex >= 0 &&
        letterIndex < library.length
      ) {
        flatListRef.current?.scrollToIndex({
          animated: false,
          index: letterIndex,
          viewPosition: 0, // Adjust view position as needed
        });
      }
    },
    [library.length],
  );

  useEffect(() => {
    scrollToLetter(currentLetter);
  }, [currentLetter, scrollToLetter]);
  // Assuming calculateSectionHeight is a utility function defined in this file or imported
  const calculateSectionHeight = (itemCount) => {
    const HEIGHT_OF_SINGLE_NOTE = 120;
    const HEIGHT_OF_SECTION_HEADER = 155;
    const TOP_MARGIN = 20;
    const BOTTOM_MARGIN = 20;
    const TOP_PADDING_HEIGHT = 10;
    const BOTTOM_PADDING = 50;
    return (
      TOP_MARGIN +
      HEIGHT_OF_SECTION_HEADER +
      HEIGHT_OF_SINGLE_NOTE * itemCount +
      TOP_PADDING_HEIGHT +
      BOTTOM_PADDING +
      BOTTOM_MARGIN +
      10
    );
  };

  // Moved getItemLayout into ItemsView
  const getItemLayout = (data, index) => {
    let offset = 0;
    for (let i = 0; i < index; i++) {
      offset += calculateSectionHeight(data[i].data.length);
    }
    const length = calculateSectionHeight(data[index].data.length);
    return { length, offset, index };
  };

  const renderSection = ({ item }) => (
    <Section section={item} navigation={navigation} />
  );

  return (
    <FlatList
      data={library}
      renderItem={renderSection}
      onViewableItemsChanged={handleViewableItemsChanged}
      keyExtractor={(item, index) => `section-${index}`}
      viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
      ListFooterComponent={<View style={{ height: 300 }} />}
      ref={flatListRef}
      getItemLayout={getItemLayout}
      onScrollToIndexFailed={(info) => {
        console.log("Scroll to index failed: ", info);
      }}
      ListEmptyComponent={
        <>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              color: "gray",
              marginTop: 100,
            }}
          >
            No data available.
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              color: "gray",
              marginTop: 100,
            }}
          >
            {" "}
            Press the "+" button to add a new note.
          </Text>
        </>
      }
    />
  );
};

export default ItemsView;
