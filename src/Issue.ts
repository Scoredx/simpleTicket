import app from './App';

export class Issue{

    saveToNote(id: string, name: string, room: string, issueText: string, importance: number, isDone: boolean){
        let newDate = new Date();
        let issue: IIssue = {
            id: id,
            name: name,
            room: room,
            issueText: issueText,
            importance: importance,
            isDone: isDone,
            date: newDate.toISOString().split('T')[0]
        }
        console.log(issue);
        return issue;
    }
}
export default Issue;
