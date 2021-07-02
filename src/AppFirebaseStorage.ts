import firebase from 'firebase';
import { firebaseConfig } from './config';
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

class AppFirebaseStorage implements IIssue{

    constructor(){}
    id: string;
    name: string;
    room: string;
    issueText: string;
    date: string;
    importance: number;
    isDone: boolean;

    async  addNote(note: any){
        const res: string = await db.collection('issues').add(note)
        .then(function(docRef) {
            return  docRef.id;
        });
        return  Promise.resolve(res);;
    }

    async getFromStorage() {
        const res = await db.collection('issues').get().then(res => ({
            data: res.docs.map((res) => ({
                data: res.data(),
                id: res.id
            }))
        }));
        const data = res.data.map((note) => ({
            ...note.data,
            id: note.id,
        }));
        return Promise.resolve(data);
    }

    async updateNote(id: string, issue: IIssue){
        const res = await db.collection('issues').doc(id).update(issue);
    }

    async  deleteNote(id: string){
        const res = await db.collection('notes').doc(id).delete();
    }
}
const appFireStorage = new AppFirebaseStorage;
export default  appFireStorage;
