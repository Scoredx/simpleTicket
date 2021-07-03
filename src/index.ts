import Issue from './Issue';
import './SCSS/reset.scss';
import './SCSS/main.scss';
import appFireStorage from './AppFirebaseStorage';

const issue = new Issue();
const inputName: HTMLInputElement = document.querySelector("#personName");
const roomNumber: HTMLInputElement = document.querySelector("#roomNumber");
const issueInput: HTMLInputElement = document.querySelector("#issueInput");
const submitButton: HTMLButtonElement = document.querySelector("#submitButton");

submitButton.addEventListener('click', () => {
    let importance: string = (document.querySelector('input[name="importance"]:checked') as HTMLInputElement).value;
    let intImportance = parseInt(importance);
    let newIssue = issue.saveToNote('', inputName.value, roomNumber.value, issueInput.value, intImportance, false);
    appFireStorage.addIssue(newIssue).then(res => {
        newIssue.id = res;
    });
}); 