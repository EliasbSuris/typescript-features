import { Injectable } from '@angular/core';

interface Book {
  title: string;
  author: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReadonlyTypeService {

  constructor() {
    const book: Book = {
      author: '',
      title: ''
    }
    book.author = 'Unknown'

    const readonlyBook: Readonly<Book> = {
      author: 'Readonly',
      title: 'Readonly Book'
    }
    // Error: Cannot assign to author because it is a read-only property.
    // readonlyBook.author = 'Error'
    console.log(readonlyBook, typeof readonlyBook);
   }
}
