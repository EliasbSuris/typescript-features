import { Injectable } from '@angular/core';

interface Book {
  title: string;
  totalPageCount: number;
  author: string;
}

@Injectable({
  providedIn: 'root',
})
export class PartialTypeService {
  constructor() {
    const unknownBook: Book = {
      author: 'Unknown',
      title: 'Unknown',
      totalPageCount: 0,
    };
    const myBook = this.updateBook(unknownBook, { title: 'My book' });
    console.log(myBook);
  }

  updateBook(book: Book, fieldsToUpdate: Partial<Book>): Book {
    return { ...book, ...fieldsToUpdate };
  }
}
