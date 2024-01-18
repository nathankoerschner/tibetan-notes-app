import React, { useState, useEffect, createContext } from "react";
import { MMKV } from "react-native-mmkv";

// Initialize MMKV storage
const storage = new MMKV();

// Create context
const NotesContext = createContext();

// Provider component
export const NotesProvider = ({ children }) => {
	const [notes, setNotes] = useState([]);

	// Load notes from storage when the app starts
	useEffect(() => {
		const savedNotes = storage.getString("notes");
		if (savedNotes) {
			setNotes(JSON.parse(savedNotes));
		}
	}, []);

	// Update MMKV storage when notes change
	useEffect(() => {
		storage.set("notes", JSON.stringify(notes));
	}, [notes]);

	return (
		<NotesContext.Provider value={{ notes, setNotes }}>
			{children}
		</NotesContext.Provider>
	);
};

export default NotesContext;
