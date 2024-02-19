import { Injectable } from '@angular/core';

type Movie = {
  title: string;
  director: string;
  genre: string;
}

// Types can't merge
// Error: Duplicate identifier TypeTryToMerge

// type MovieType = {
//   foo: string;
// }

// Type extends
type Slasher = Movie & { killerName: string };

// Type from an interface:

interface IFoo {
  foo: string;
}

type TFoo = IFoo;

// Types advanced:

const AVAILABLE_LANGUAGE_CODES = ['en', 'es'] as const;

type LanguageCode = (typeof AVAILABLE_LANGUAGE_CODES)[number];

type LocatedText = Record<LanguageCode, string>;

type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
}

@Injectable({
  providedIn: 'root'
})
export class TypesExampleService {

  constructor() {
    console.log('------------TYPES---------------');
    const movie: Movie = {
      director: 'Arnold Schwarzenegger',
      genre: 'Action',
      title: 'Arnold Movie'
    };
    const slasher: Slasher = {
    director: 'Arnold Schwarzenegger',
    genre: 'Action',
    title: 'Arnold Movie',
    killerName: 'Jason'
    };
    const foo: TFoo = {
      foo: 'etc'
    };

    console.log('MOVIE:', movie);
    console.log('SLASHER', slasher);
    console.log('FOO', foo);

    const locatedText: LocatedText = {
      en: 'Hi',
      es: 'Hola'
    }

    console.log(AVAILABLE_LANGUAGE_CODES, locatedText);
  }
}
