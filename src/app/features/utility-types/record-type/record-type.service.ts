import { Injectable } from '@angular/core';

interface Book {
  title: string;
  totalPageCount: number;
  author: string;
}

@Injectable({
  providedIn: 'root'
})
export class RecordTypeService {
  bookDictionary!: Record<string, Book>;
  // bookDictionary!: {[key: string]: Book};

  constructor() {
    const book: Book = {
      author: 'Brandon Sanderson',
      title: 'Way of kings',
      totalPageCount: 957,
    };
    this.bookDictionary = {[book.author]: book};
    console.log(this.bookDictionary);
   }
}
