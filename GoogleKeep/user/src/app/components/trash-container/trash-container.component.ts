import { Component } from '@angular/core';
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
  selector: 'app-trash-container',
  templateUrl: './trash-container.component.html',
  styleUrls: ['./trash-container.component.css']
})
export class TrashContainerComponent {
  trashNotes: NoteObj[] = [];
  constructor(public noteService: NoteService) { 
    this.getDeletedNotes();
  }
  getDeletedNotes(): void {
    this.noteService.getTrashNotesCall().subscribe(
      (result: any)=>{
        this.trashNotes=result.data.data;
       console.log(this.trashNotes);},
      error => {
        console.error('Error fetching deleted notes:', error);
      }
    );
  }
}
