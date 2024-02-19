import { Injectable } from '@angular/core';

interface Book {
  title: string;
  totalPageCount: number;
  author: string;
}

type BasicBook = Omit<Book, 'totalPageCount'>

@Injectable({
  providedIn: 'root'
})
export class OmitTypeService {

  constructor() {
    const basicBook: BasicBook = {
      author: 'Brandon Sanderson',
      title: 'Way of kings',
    };

    console.log(basicBook);
   }
}
