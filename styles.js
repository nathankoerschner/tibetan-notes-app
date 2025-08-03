import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Align children side by side
    flex: 1, // Take full height of the screen
  },
  leftSidebar: {
    backgroundColor: "white", // Gray background
        paddingLeft: 15,
    width: "20%", // Adjust width as needed
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#fff", // Example border color
    borderWidth: 1, // Example border width
    shadowOffset: { width: 0, height: 2 },
  },

  sectionContainer: {
    padding: 10, // Example padding
    paddingHorizontal: 60, // Example padding
    paddingBottom: 50, // Example padding
    marginVertical: 20,

    marginHorizontal: 0, // Add horizontal margin
    alignContent: "center",
    alignSelf: "center",

    backgroundColor: "#fff", // Example background color
    borderColor: "#fff", // Example border color

    borderRadius: 15, // Adjust for desired roundness
  },
  itemContainer: {
    width: "88%", // Specific width
    height: 100, // Fixed height
    maxHeight: 100, // Max height
    minHeight: 100, // Min height
    marginVertical: 10,
    alignSelf: "center",
    padding: 10,
    minWidth: "85%", // Minimum width
    backgroundColor: "#fff",
    borderRadius: 5,
    borderTopColor: "#f2f2f7",
    borderTopWidth: 1,
  },
  sectionHeader: {
    alignSelf: "flex-start", // Stretch to fill the container
    paddingVertical: 5, // Vertical padding for top and bottom
    paddingTop: 20, // Add extra padding to the top
    margin: 5, // Optional margin for spacing around the box
  },

  sectionHeaderText: {
    fontWeight: "bold",
    fontSize: 100,
    textAlign: "center", // Ensure text is aligned to the left
    alignSelf: "stretch", // Align self to the start (
  },
  itemTitle: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 5,
  },
  itemBody: {
    fontSize: 24,
    fontWeight: "200",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  },
  addButton: {
    backgroundColor: "#B31D1D", // Consistent button color
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
  charBox: {
    backgroundColor: "#f0f0f0", // Gray background
    borderRadius: 10,
    elevation: 5,
    padding: 10,
    marginHorizontal: 10, // Add horizontal margin
  },
  charRow: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 5,
  },
  charButton: {
    margin: 5,
    backgroundColor: "#007AFF",
    borderRadius: 5,
    padding: 10,
  },
  charButtonText: {
    color: "white",
    fontSize: 18,
  },
  scrollbarContainer: {
    flex: 1,
    width: "100%",
  },
  scrollbarContentContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 20,
  },
  scrollbarItem: {
    padding: 13,
    width: "100%",
    alignItems: "center",
  },

  topLeftTextButton: {
    position: "absolute", // Position it over everything else
    top: 20, // Distance from the top of the container (increased from 12)

    left: 10, // Distance from the left of the container
    padding: 8, // Padding inside the button
    borderRadius: 5, // Rounded corners
    zIndex: 1, // Make sure it's above other elements
  },
  topLeftTextButtonText: {
    fontSize: 12, // Adjust as needed
    marginTop: 20,
  },
  // login screen
});

export default styles;
