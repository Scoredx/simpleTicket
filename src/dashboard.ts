import './SCSS/reset.scss';
import './SCSS/dashboard.scss';

import appFireStorage from './AppFirebaseStorage'
import {IssueComponent} from './IssueComponent';

const issuesDiv: HTMLInputElement = document.querySelector("#issues");
const issues = new IssueComponent();

window.addEventListener('load', () => {
    appFireStorage.getFromStorage().then(function(data){
        data.forEach(ele => {
            let issue = ele as IIssue;
            issuesDiv.appendChild(issues.createIssue(issue));
        });
    });
});