import app from './App';

export class Issue{

    saveToNote(id: string, name: string, room: string, problem: string, importance: number, isDone: boolean){
        let newDate = new Date();
        let note: IIssue = {
            id: id,
            name: name,
            room: room,
            problem: problem,
            importance: importance,
            isDone: isDone,
            date: newDate.toISOString().split('T')[0]
        }
        return note;
    }
}
export default Issue;
