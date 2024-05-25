import { Component } from '@angular/core';

interface Item {
  src: string,
  title: string,
  description: string
}

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss'
})
export class PreviewComponent {

  data: Item[] = [
    {
      src: "assets/images/gallery/image1.png",
      "title": "Image 1",
      "description": "Description 1"
    },
    {
      src: "assets/images/gallery/image2.jpg",
      "title": "Image 2",
      "description": "Description 2"
    },
    {
      "src": "assets/images/gallery/image3.jpg",
      "title": "Image 3",
      "description": "Description 3"
    },
    {
      "src": "assets/images/gallery/image4.png",
      "title": "Image 4",
      "description": "Description 4"
    },
    {
      "src": "assets/images/gallery/image5.jpg",
      "title": "Image 5",
      "description": "Description 5"
    },
    {
      "src": "assets/images/gallery/image6.jpg",
      "title": "Image 6",
      "description": "Description 6"
    },
    {
      "src": "assets/images/gallery/image7.png",
      "title": "Image 7",
      "description": "Description 7"
    },
    {
      "src": "assets/images/gallery/image8.jpg",
      "title": "Image 8",
      "description": "Description 8"
    },
    {
      "src": "assets/images/gallery/image9.jpg",
      "title": "Image 9",
      "description": "Description 9"
    },
    {
      "src": "assets/images/gallery/image10.jpg",
      "title": "Image 10",
      "description": "Description 10"
    },
    {
      "src": "assets/images/gallery/image11.jpg",
      "title": "Image 11",
      "description": "Description 11"
    },
    {
      "src": "assets/images/gallery/image12.jpg",
      "title": "Image 12",
      "description": "Description 12"
    },
    {
      "src": "assets/images/gallery/image13.jpg",
      "title": "Image 13",
      "description": "Description 13"
    },
    {
      "src": "assets/images/gallery/image14.jpg",
      "title": "Image 14",
      "description": "Description 14"
    },
    {
      "src": "assets/images/gallery/image15.jpg",
      "title": "Image 15",
      "description": "Description 15"
    },
    {
      "src": "assets/images/gallery/image16.jpg",
      "title": "Image 16",
      "description": "Description 16"
    }
  ]
}
