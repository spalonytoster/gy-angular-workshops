import { Component, OnInit } from '@angular/core';
import { Note } from './notes/note.model';
import { NotesService } from './notes/notes.service';

enum NotesViewState {
  display = 0,
  create = 1
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  notes: Note[] = [];
  selectedNote: Note;
  viewState = NotesViewState.display;

  notesViewStateRef = NotesViewState;
  filteringEnabled: boolean = true;

  constructor(private notesService: NotesService) {
  }

  ngOnInit() {
    this.notes = this.notesService.get();
    this.selectedNote = this.notes[0];
  }

  onSelectedItem(note: Note) {
    this.selectedNote = note;
    this.viewState = NotesViewState.display;
  }

  onCreatedItem(note: Note) {
    this.notesService.push(note);
    this.viewState = NotesViewState.display;
  }

  onDeletedItem(deleted: Note) {
    this.notesService.remove(deleted._id);
    this.notes = this.notesService.get();
  }

  createNote() {
    this.viewState = NotesViewState.create;
  }

  onBack() {
    this.viewState = NotesViewState.display;
  }

  toggleFiltering() {
    this.filteringEnabled = !this.filteringEnabled;
  }
}
