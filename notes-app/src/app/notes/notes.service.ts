import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable()
export class NotesService {
  notes;

  constructor() {
    let dueDates = [ new Date(), new Date(), new Date(), new Date()];
    dueDates.forEach((date, index) => {
      date.setDate(date.getDate() + index);
    });
    this.notes = [
      { _id: 1, title: 'First note', content: 'First note sample content', createdOn: new Date(2017, 4, 1, 15, 30), priority: 2, dueDate: dueDates[0] },
      { _id: 2, title: 'Second note', content: 'Second note sample content', createdOn: new Date(2017, 4, 2, 16, 30), priority: 5, dueDate: dueDates[1] },
      { _id: 3, title: 'Third note', content: 'Third note sample content', createdOn: new Date(2017, 4, 3, 17, 30), priority: 3, dueDate: dueDates[2] },
      { _id: 4, title: 'Fourth note', content: 'Fourth note sample content', createdOn: new Date(2017, 4, 4, 18, 30), priority: 1, dueDate: dueDates[3] },
    ] as Note[];
  }

  get(): Note[] {
    return this.notes;
  }

  push(note: Note) {
    this.notes.push(note);
  }

  remove(_id: number) {
    this.notes = this.notes.filter((note) => note._id !== _id);
  }
}
