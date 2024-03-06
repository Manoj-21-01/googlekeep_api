// archive.component.ts
import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note-services/note.service';

interface NoteObj {
  title: string;
  description: string;
  color: string;
  id: string;
  isArchived: boolean;
  isDeleted: boolean;
}


@Component({
  selector: 'app-archive-container',
  templateUrl: './archive-container.component.html',
  styleUrls: ['./archive-container.component.css']
})
export class ArchiveContainerComponent {
  archivedNotes: NoteObj[]= [];
  filteredArchivedNotes: NoteObj[]= [];

  constructor(public noteService: NoteService) {
    this.getArchivedNotes();
   }

  getArchivedNotes(): void {
    this.noteService.getArchivedNotesCall().subscribe(
      (result: any)=>{
        this.archivedNotes=result.data.data;
        this.filteredArchivedNotes=this.archivedNotes.filter(notes => notes.isArchived && !notes.isDeleted);
       console.log(this.archivedNotes);},
      error => {
        console.error('Error fetching archived notes:', error);
      }
    );
  }
}
