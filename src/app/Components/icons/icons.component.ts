import { Component, Input, OnInit } from '@angular/core';
import { NoteservicesService } from 'src/app/Services/noteservices/noteservices.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  @Input() notedata: any;

  constructor(private note : NoteservicesService){

  }
  ngOnInit(): void {
    console.log(this.notedata.notesId)

  }

  Trash() {
    console.log(this.notedata.notesId)
    
    this.note.deleteNote(this.notedata.notesId).subscribe((response: any) => {
      console.log("trash response=", response);

    },
    )
  }

  Archive() {
    let reqdata =
    {   
      noteid : this.notedata.notesId
    }
    console.log(reqdata)
    
    this.note.archivenote(reqdata).subscribe((response: any) => {
      console.log("archive response=", response);

    },
    )
  }
}
