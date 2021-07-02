import app from './App';
import Issue from './Issue';
import './SCSS/reset.scss';
import './SCSS/main.scss';
import appFireStorage from './AppFirebaseStorage'

const issue = new Issue();
const inputName: HTMLInputElement = document.querySelector("#personName");
const roomNumber: HTMLInputElement = document.querySelector("#roomNumber");
const problemInput: HTMLInputElement = document.querySelector("#problemInput");
const submitButton: HTMLButtonElement = document.querySelector("#submitButton");

submitButton.addEventListener('click', () => {
    let importance: string = (document.querySelector('input[name="importance"]:checked') as HTMLInputElement).value;
    let intImportance = parseInt(importance);
    let newNote = issue.saveToNote('',inputName.value,roomNumber.value,problemInput.value, intImportance, false);
    appFireStorage.addNote(newNote).then(res => {
        newNote.id = res;
    });
});