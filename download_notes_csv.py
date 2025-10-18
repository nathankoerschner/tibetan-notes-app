import re
import csv
import firebase_admin
from firebase_admin import credentials, firestore

# Initialize Firebase Admin
cred = credentials.Certificate(
    "/Users/natkoersch/Documents/tibetan-notes-app-firebase-adminsdk-o4iho-19f36176da.json"
)
firebase_admin.initialize_app(cred)
db = firestore.client()

# Prepare CSV
with open("all_notes_export.csv", "w", newline="") as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(["user_id", "note_id", "title", "body", "collections", "rootLetter", "create_time"])

    users = db.collection("Users").list_documents()
    for user_doc_ref in users:
        user_id = user_doc_ref.id
        print(f"User: {user_id}")

        notes = user_doc_ref.collection("Notes").list_documents()
        for note_doc_ref in notes:
            snapshot = note_doc_ref.get()
            data = snapshot.to_dict()
            if not data:
                continue

            title = re.sub(",", "", data.get("title", ""))
            body = re.sub(",", "", data.get("body", ""))
            raw_collections = data.get("collections", [])
            # Safely stringify all collection values
            collections = ";".join([str(c) for c in raw_collections if c is not None])
            root_letter = data.get("rootLetter", "")
            create_time = snapshot.create_time.isoformat() if snapshot.create_time else ""

            writer.writerow([user_id, snapshot.id, title, body, collections, root_letter, create_time])
            print(f"  Note: {snapshot.id}")

