import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from './note.model';

@Injectable()
export class NotesService {
    notes = [
      { title: 'First note', content: 'First note sample content', createdOn: new Date(2017, 4, 1, 15, 30) },
      { title: 'Second note', content: 'Second note sample content', createdOn: new Date(2017, 4, 2, 16, 30) },
      { title: 'Third note', content: 'Third note sample content', createdOn: new Date(2017, 4, 3, 17, 30) },
      { title: 'Fourth note', content: 'Fourth note sample content', createdOn: new Date(2017, 4, 4, 18, 30) },
    ] as Note[];

    get(): Observable<Note[]> {
        return Observable.from([this.notes]);
    }

    push(note: Note): Observable<{}> {
        this.notes.push(note);

        return Observable.empty();
    }
}
