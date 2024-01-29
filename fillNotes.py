import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import re

# Initialize Firebase Admin
cred = credentials.Certificate(
    "/Users/nathankoerschner/Downloads/tibetan-notes-app-firebase-adminsdk-o4iho-542211060c.json"
)
firebase_admin.initialize_app(cred)

# Reference to Firestore database
db = firestore.client()


word_list = """
ཀa
ཁb
གc
ངd
ཅe
ཆf
ཇg
ཉh
ཏi
ཐj
དk
ནl
པm
ཕn
བo
མp
ཙq
ཚr
ཛs
ཝt
ཞu
ཟv
འw
ཡx
རy
ལz
ཤza
སzb
ཧzc
ཨzd
1z
2z
"""

# Split the string into lines and then split each line using the regex
for line in word_list.split("\n"):
    parts = re.split(r"(?<![a-z ])(?=[a-z ])", line, maxsplit=1)
    print(parts)
    if len(parts) == 2:
        title, body = parts

        # Add to Firestore
        doc_ref = (
            db.collection("Users")
            .document("AXGgorHEUUVYsZPZo0pAezl9ys53")
            .collection("Notes")
        )
        doc_ref.add({"title": title.strip(), "body": body})
