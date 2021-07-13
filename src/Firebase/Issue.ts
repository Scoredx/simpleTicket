/* eslint-disable */
export class Issue {
  saveToNote(
    id: string,
    name: string,
    room: string,
    issueText: string,
    importance: number,
    isDone: boolean
  ) {
    const newDate = new Date();
    const issue: IIssue = {
      id: id,
      name: name,
      room: room,
      issueText: issueText,
      importance: importance,
      isDone: isDone,
      date: newDate.toISOString().split("T")[0],
    };
    return issue;
  }
}
export default Issue;
