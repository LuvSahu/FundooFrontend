import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteservicesService } from '../Services/noteservices/noteservices.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  
  title: any
  noteId:any
  description: any

  constructor(private note : NoteservicesService, public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    this.title = this.data.title
    this.description = this.data.description
    this.noteId = this.data.notesId
    console.log("Id==== "+this.noteId)
  }
  
  onNoClick(): void {

    let reqdata =
    { 
      title: this.title,
      description: this.description,  
      noteid : this.noteId
    }
    this.note.updateNote(reqdata).subscribe((response: any) => {
      console.log("update response=",response);
    this.dialogRef.close(response);
  })
}
}