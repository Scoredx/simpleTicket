import app from './App';
import Issue from './Problem';
import './SCSS/reset.scss';
import './SCSS/main.scss';
import appFireStorage from './AppFirebaseStorage'

const issue = new Issue();
const inputName: HTMLInputElement = document.querySelector("#personName");
const roomNumber: HTMLInputElement = document.querySelector("#roomNumber");
const problemInput: HTMLInputElement = document.querySelector("#problemInput");
const submitButton: HTMLButtonElement = document.querySelector("#submitButton");


submitButton.addEventListener('click', () => {
    let newNote = issue.saveToNote('',inputName.value,roomNumber.value,problemInput.value, 1, false);
    appFireStorage.addNote(newNote).then(res => {
        newNote.id = res;
    });
});