import "../assets/SCSS/issueComponent.scss";
import appFireStorage from "../Firebase/AppFirebaseStorage";

export class IssueComponent {
  createIssue(issue: IIssue) {
    const issueDiv: HTMLDivElement = document.createElement("div");
    issueDiv.className = "issueComponent";
    issueDiv.style.backgroundColor = "white";

    const newDate = new Date();
    const issueDate: HTMLSpanElement = document.createElement("span");
    issueDate.className = "issueDate";
    issueDate.innerHTML = newDate.toISOString().split("T")[0];

    const issueName: HTMLDivElement = document.createElement("div");
    issueName.className = "issueName";
    issueName.contentEditable = "true";
    issueName.innerHTML = issue.name;

    const issueRoom: HTMLDivElement = document.createElement("div");
    issueRoom.className = "issueRoom";
    issueRoom.contentEditable = "true";
    issueRoom.innerHTML = issue.room;

    const issueText: HTMLDivElement = document.createElement("div");
    issueText.className = "issueText";
    issueText.innerHTML = issue.issueText;

    const issueImportance: HTMLDivElement = document.createElement("div");
    issueImportance.className = "issueImportance";
    this.issueIsDoneEvent(issueImportance, issue);
    this.importanceColor(issue, issueImportance);

    issueImportance.addEventListener("click", () => {
      switch (issue.isDone) {
        case false:
          issue.isDone = true;
          this.issueIsDoneEvent(issueImportance, issue);
          issueImportance.style.backgroundColor = "green";
          break;

        case true:
          issue.isDone = false;
          this.issueIsDoneEvent(issueImportance, issue);
          this.importanceColor(issue, issueImportance);
          //issueImportance.style.backgroundColor =
          break;
      }
    });

    // const issueIsDone: HTMLDivElement = document.createElement("div");
    // issueIsDone.className = "issueIsDone";
    // issueIsDone.contentEditable = "true";

    const divTool: HTMLDivElement = document.createElement("div");
    divTool.className = "divTool";

    issueDiv.appendChild(issueImportance);
    issueDiv.appendChild(divTool);
    divTool.appendChild(issueName);
    divTool.appendChild(issueRoom);
    issueDiv.appendChild(issueText);
    issueDiv.appendChild(issueDate);
    // issueDiv.appendChild(issueIsDone);

    return issueDiv;
  }

  importanceColor(issue: IIssue, issueImportance: HTMLDivElement) {
    if (issue.isDone == true) {
      issueImportance.style.backgroundColor = "green";
    } else {
      switch (issue.importance) {
        case 1:
          return (issueImportance.style.backgroundColor = "yellow");
        case 2:
          return (issueImportance.style.backgroundColor = "orange");
        case 3:
          return (issueImportance.style.backgroundColor = "red");
      }
    }
  }

  issueIsDoneEvent(issueImportance: HTMLDivElement, issue: IIssue) {
    issueImportance.addEventListener("click", () => {
      appFireStorage.updateIssue(issue.id, issue);
    });
  }
}
