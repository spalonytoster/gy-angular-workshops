export interface Note {
    _id: number;
    title: string;
    content: string;
    createdOn: Date;
    dueDate: Date;
    priority: number;
}
