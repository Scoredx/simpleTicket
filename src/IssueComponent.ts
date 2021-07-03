// import { Issue } from './Issue';
import './SCSS/issueComponent.scss';
import appFireStorage from './AppFirebaseStorage'

export class IssueComponent{

    createIssue(issue: IIssue){        
        let issueDiv: HTMLDivElement = document.createElement("div");
        issueDiv.className = "issueComponent";
        issueDiv.style.backgroundColor = "white";

        let newDate = new Date()
        let issueDate: HTMLSpanElement = document.createElement("span");
        issueDate.className = "issueDate";
        issueDate.innerHTML = newDate.toISOString().split('T')[0];

        let issueName: HTMLDivElement = document.createElement("div");
        issueName.className = "issueName";
        issueName.contentEditable = "true";
        issueName.innerHTML = issue.name;

        let issueRoom: HTMLDivElement = document.createElement("div");
        issueRoom.className = "issueRoom";
        issueRoom.contentEditable = "true";
        issueRoom.innerHTML = issue.room;

        let issueText: HTMLDivElement = document.createElement("div");
        issueText.className = "issueText";
        issueText.innerHTML = issue.issueText;

        let issueImportance: HTMLDivElement = document.createElement("div");
        issueImportance.className = "issueImportance";
        this.issueIsDoneEvent(issueImportance, issue);
        this.importanceColor(issue, issueImportance);
        
        issueImportance.addEventListener('click', () => {
            switch(issue.isDone){
                case false:
                    issue.isDone = true;
                    this.issueIsDoneEvent(issueImportance, issue);
                    issueImportance.style.backgroundColor = 'green';
                break;

                case true:
                    issue.isDone = false;
                    this.issueIsDoneEvent(issueImportance, issue);
                    issueImportance.style.backgroundColor = this.importanceColor(issue, issueImportance);
                break;
            }
        });

        let issueIsDone: HTMLDivElement = document.createElement("div");
        issueIsDone.className = "issueIsDone";
        issueIsDone.contentEditable = "true";

        let divTool: HTMLDivElement = document.createElement("div");
        divTool.className = "divTool";

        issueDiv.appendChild(issueImportance);
        issueDiv.appendChild(divTool);
        divTool.appendChild(issueName);
        divTool.appendChild(issueRoom);

        issueDiv.appendChild(issueText);

        issueDiv.appendChild(issueDate);
        issueDiv.appendChild(issueIsDone);

        return issueDiv;
    }

    importanceColor(issue: IIssue, issueImportance: HTMLDivElement){
        if(issue.isDone == true){
            issueImportance.style.backgroundColor = 'green';
        }else{
            switch(issue.importance){
                case 1:
                return issueImportance.style.backgroundColor = 'yellow';
    
                case 2:
                return issueImportance.style.backgroundColor = 'orange';
    
                case 3:
                return issueImportance.style.backgroundColor = 'red';
            }
        }
    }

    issueIsDoneEvent(issueImportance: HTMLDivElement,  issue: IIssue){
        issueImportance.addEventListener('click', () => {
            appFireStorage.updateIssue(issue.id,{
                isDone: issue.isDone,
            });
        });
    }
}




 