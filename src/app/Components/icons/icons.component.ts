import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteservicesService } from 'src/app/Services/noteservices/noteservices.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  @Input() notedata: any;

  @Output() refresh = new EventEmitter<string>();

  colorsArr : Array<any> = [
    { code: '#fff', name: 'white' },
    { code: '#f28b82', name: 'red' },
    { code: '#fbbc04', name: 'orange' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ccff90', name: 'green' },
    { code: '#a7ffeb', name: 'teal' },
    { code: '#cbf0f8', name: 'Blue' },
    { code: '#aecbfa', name: 'darkblue' },
    { code: '#d7aefb', name: 'purple' },
    { code: '#fdcfe8', name: 'pink' },
    { code: '#e6c9a8', name: 'brown' },
    { code: '#e8eaed', name: 'grey' },];

  constructor(private note : NoteservicesService){

  }
  ngOnInit(): void {
    // console.log(this.notedata.notesId)

  }

  Trash() {
    // console.log(this.notedata.notesId)

    let reqdata =
    {   
      noteid : this.notedata.notesId
    }
    console.log(reqdata)
    
    this.note.deleteNote(reqdata).subscribe((response: any) => {
      console.log("trash response=", response);
      this.refresh.emit(response)
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
      this.refresh.emit(response)
    },
    )
  }

  changeColor(color:any)
  {
    console.log(color);
    console.log(this.notedata);

    this.notedata.color = color;
    console.log(color);
    let reqdata =
    {   
      Color : color,
      NotesID : this.notedata.notesId
    }
    console.log(reqdata)
    this.note.colorPallete(reqdata).subscribe((response:any)=>{
      console.log(response);
    })
  }

  
}

