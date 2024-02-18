import { Injectable } from '@angular/core';

interface Book {
  title: string;
  author?: string;
}

@Injectable({
  providedIn: 'root',
})
export class RequiredTypeService {
  constructor() {
    const simpleBook = this.createSimpleBook({ title: 'Title' });
    const complexBook = this.createCompleteBook({
      title: 'Title',
      author: 'Author',
    });
    console.log(simpleBook);
    console.log(complexBook);
  }

  createSimpleBook({ title }: Book): Book {
    return { title };
  }

  createCompleteBook({ author, title }: Required<Book>): Required<Book> {
    return { title, author };
  }
}
