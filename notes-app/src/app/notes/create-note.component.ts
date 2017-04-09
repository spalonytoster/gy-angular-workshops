import { Component, Output, EventEmitter } from '@angular/core';
import { Note } from './note.model';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html'
})
export class CreateNoteComponent {
  @Output() createdItem = new EventEmitter<Note>();
  @Output() onBack = new EventEmitter();

  newNote = {} as Note;

  ngOnInit() {
    // sadly it doesn't work
    this.newNote.dueDate = new Date();
  }

  onCancel() {
    this.onBack.emit();
  }

  onSubmit() {
    this.newNote.createdOn = new Date();
    this.newNote.dueDate = new Date(this.newNote.dueDate);
    this.newNote.priority = 1;
    this.createdItem.emit(this.newNote);
    this.newNote = {} as Note;
  }
}
