import re

import firebase_admin
from firebase_admin import credentials, firestore

# Initialize Firebase Admin
cred = credentials.Certificate(
    "/Users/nathankoerschner/tibetan-notes-app-firebase-adminsdk-o4iho-fcdb720637.json"
)
firebase_admin.initialize_app(cred)

# Reference to Firestore database
db = firestore.client()

# Add to Firestore
doc_ref = (
    db.collection("Users").document("Kjuiw0j0pfVJlv6sEvulPakQZ3q2").collection("Notes")
)

# download all of the notes and save them to a .csv file

# Get all notes
notes = doc_ref.get()

# Create a new file
f = open("downloaded_notes.csv", "w")

# Write the header
f.write("title,body,collections\n")

# Write the notes
for note in notes:
    note_dict = note.to_dict()
    title = note_dict["title"]
    content = note_dict["body"]
    # if the note has a collections field, write it to the csv
    if "collections" in note_dict:
        collections = note_dict["collections"]
    else:
        collections = ""

    # Remove commas from the title and content
    title = re.sub(",", "", title)
    content = re.sub(",", "", content)

    # Write the note to the file
    f.write(f"{title},{content},{collections}\n")


        
# Close the file
f.close()
