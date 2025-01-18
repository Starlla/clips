import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css']
})
export class UploadsComponent implements OnInit {
  isDragover = false
  file: File | null = null
  nextStep = false

  title = new FormControl('', {
    validators: [
      Validators.required,
      Validators.minLength(3)
    ],
  })

  uploadForm = new FormGroup({
    title: this.title
  })

  constructor() { }

  ngOnInit(): void {
  }

  storeFile($event: Event) {
    this.isDragover = false;

    this.file = ($event as DragEvent).dataTransfer?.files.item(0) ?? null

    if (!this.file || this.file.type !== 'video/mp4') {
      return
    }


    this.title.setValue(
      this.file.name.replace(/\.[^/.]+$/, '')
    )
    this.nextStep = true;

    // console.log(this.file)

  }

  uploadFile() {
    console.log('uploaded')
  }

}
