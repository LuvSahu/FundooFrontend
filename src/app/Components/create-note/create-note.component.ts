import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteservicesService } from 'src/app/Services/noteservices/noteservices.service';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {

  noteform!: FormGroup;
  isShow = false;
  title : any;
  description : any;

  constructor(private formBuilder: FormBuilder, private note : NoteservicesService) { }

  ngOnInit(): void {
    this.noteform = this.formBuilder.group({

      title: ['', Validators.required],
      description: ['', Validators.required],


    });
  }

  show() {
    console.log("opennote");
    this.isShow = true
  }

  close() {

    console.log("closetab");
    this.isShow = false
    let reqdata = {
      Title: this.noteform.value.title,
      Description: this.noteform.value.description,
      
    }
    this.note.addnote(reqdata).subscribe((response: any) => {
      console.log(response);
    })
  }
}

