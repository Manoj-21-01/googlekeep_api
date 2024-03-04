import { Component } from '@angular/core';
import { NoteService } from 'src/app/services/note-services/note.service';

@Component({
  selector: 'app-archive-container',
  templateUrl: './archive-container.component.html',
  styleUrls: ['./archive-container.component.css']
})
export class ArchiveContainerComponent {
  notes: string[] = []; // Initialize an empty array for notes

  constructor(private noteService: NoteService) {} // Inject the NoteService

  ngOnInit() {
    // Fetch initial notes (you can load them from an API or elsewhere)
    this.notes = this.noteService.getNotes();
  }

  archiveNotes() {
    // Call the service method to archive notes
    this.noteService.archiveNotes(this.notes);
    this.notes = []; // Clear the notes array after archiving
  }
}
