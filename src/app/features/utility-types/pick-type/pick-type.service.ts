import { Injectable } from '@angular/core';

interface Book {
  title: string;
  totalPageCount: number;
  author: string;
}

type BasicBook = Pick<Book, 'author' | 'title'>

@Injectable({
  providedIn: 'root'
})
export class PickTypeService {

  constructor() {
    const basicBook: BasicBook = {
      author: 'Brandon Sanderson',
      title: 'Way of kings',
    };

    console.log(basicBook);
   }
}
