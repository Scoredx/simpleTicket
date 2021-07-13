import firebase from "firebase";
import { firebaseConfig } from "./config";
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

class AppFirebaseStorage {
  async addIssue(issue: IIssue) {
    const res: string = await db
      .collection("issues")
      .add(issue)
      .then((docRef) => {
        return docRef.id;
      });
    return Promise.resolve(res);
  }

  async getFromStorage() {
    const res = await db
      .collection("issues")
      .get()
      .then((res) => ({
        data: res.docs.map((res) => ({
          data: res.data(),
          id: res.id,
        })),
      }));
    const data = res.data.map((note) => ({
      ...note.data,
      id: note.id,
    }));
    return Promise.resolve(data);
  }

  async updateIssue(id: string, issue: IIssue) {
    await db.collection("issues").doc(id).update(issue);
  }

  async deleteNote(id: string) {
    await db.collection("issues").doc(id).delete();
  }
}
const appFireStorage = new AppFirebaseStorage();
export default appFireStorage;
