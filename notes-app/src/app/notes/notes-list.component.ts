import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from './note.model';
import * as moment from 'moment';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html'
})
export class NotesListComponent {
  @Input() notes = [] as Note[];
  @Input() selectedNote = {} as Note;
  @Output() selectedItem = new EventEmitter<Note>();
  @Output() deletedItem = new EventEmitter<Note>();
  @Output() onEditItem = new EventEmitter<Note>();

  selectItem(note: Note) {
    this.selectedNote = note;
    this.selectedItem.emit(note);
  }

  deleteItem(note: Note) {
    /*
      if we're deleting the note that is currently selected,
      we're going to set the first available note on the list
     */
    if (this.notes.length > 1 && this.selectedNote === note) {
      if (this.selectedNote === this.notes[0]) {
        this.selectItem(this.notes[1]);
      }
      else {
        this.selectItem(this.notes[0]);
      }
    }
    this.deletedItem.emit(note);
  }

  editItem(note: Note) {
    this.onEditItem.emit(note);
  }

  isDueDateTommorow(dueDate: Date) {
    return moment.duration(moment(dueDate).diff(moment(new Date()))).asDays() <= 1;
  }
}
