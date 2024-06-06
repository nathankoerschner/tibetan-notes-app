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

# delete any note where one of the values in the collections array is tVYw86ibgMf6zbjh9ean
docs = doc_ref.stream()
for doc in docs:
    if "collections" in doc.to_dict():
        if "tVYw86ibgMf6zbjh9ean" in doc.to_dict()["collections"]:
            print("Deleting note: ", doc.id)
            doc_ref.document(doc.id).delete()
            print("Deleted note: ", doc.id)
        else:
            print("Note not deleted: ", doc.id)
    else:
        print("Note not deleted: ", doc.id)
