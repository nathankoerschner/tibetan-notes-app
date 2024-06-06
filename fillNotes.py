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

# read from words.csv

with open("words.csv", "r") as file:
    lines = file.readlines()

    for line in lines:
        title, body, source = line.split(",", 2)
        # append "source" to the body

        body = body + "\n\nSource: " + source

        doc_ref.add({"title": title.strip(), "body": body, "collections": ['BwmEvCb5Pb8SoMayLqWS']})
        print(f"Added {title}")
