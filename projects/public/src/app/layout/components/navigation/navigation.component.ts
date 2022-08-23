import { Component, OnInit } from '@angular/core';
import {NavigationLink} from '#shared/classes/navigation';

@Component({
  selector: 'ppj-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  fileToUpload: File;

  navigationLinks: NavigationLink[] = [
    {label: 'Меню', command: '/'},
    {label: 'Акции', command: '/stocks'},
    {label: 'Конструктор', command: '/constructor'},
    {label: 'Доставка', command: '/delivery'},
    {label: 'Доставка', command: '/delivery'},
    {label: 'Контакты', command: '/contacts'},
  ]

  constructor(
    // private upload: UploadFileGQL,
    // private readonly createProductGQL: CreateProductGQL
  ) { }

  ngOnInit(): void {
  }

  imageManipulation($event: Event, files: EventTarget): void {
    this.fileToUpload = null;
    // @ts-ignore
    this.fileToUpload = files.files.item(0);

    // this.upload.mutate({file: this.fileToUpload}).subscribe()

    console.log(this.fileToUpload);

    // if (this.fileToUpload) {
    //   const file: File = this.fileToUpload;
    //   const reader = new FileReader();
    //   reader.onload = () => this.previewImageSrc = reader.result;
    //   reader.readAsDataURL(file);
    // } else {
    //   this.previewImageSrc = '';
    // }
  }

  send() {
    // this.createProductGQL.mutate({file: this.fileToUpload, createProductInput: {name: 'Продукт'}}).subscribe()
  }
}
