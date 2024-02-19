import { Injectable } from '@angular/core';

interface Movie {
  title: string;
  director: string;
  genre: string;
}

// Interfaces declaration merging

interface Car {
  brand: string;
}

interface Car {
  model: string;
}

// Interface extends

interface AirCar extends Car {
  maxAltitude: number;
}

@Injectable({
  providedIn: 'root'
})
export class InterfacesExampleService {

  constructor() {
    console.log('------------INTERFACEs---------------');
    const movie: Movie = {
      director: 'Arnold Schwarzenegger',
      genre: 'Action',
      title: 'Arnold Movie'
    }

    console.log('MOVIE:', movie);

    const car: Car = {
      brand: 'Seat',
      model: 'Panda'
    };
    const airCar: AirCar = {
      brand: 'Seat',
      model: 'Panda',
      maxAltitude: 100
    };
    console.log('CAR', car);
    console.log('AIRCAR', airCar);

    const notMovie: unknown = { notMovie: 'hola'};
    const almostMovie: unknown = {
      title: 'Foo',
      director: 'Foo'
    };
    const actualMovie: unknown = {
      director: 'Arnold Schwarzenegger',
      genre: 'Action',
      title: 'Arnold Movie'
    };
    // Error actualMovie is of type unknown
    // actualMovie.director
    if(this.isMovie(actualMovie)) {
      actualMovie.director;
    }
    console.log(notMovie, this.isMovie(notMovie));
    console.log(almostMovie, this.isMovie(almostMovie));
    console.log(actualMovie, this.isMovie(actualMovie));
    console.log('A MOVIE OF COURSE IS A MOVIE', movie, this.isMovie(movie));
  }

  private isMovie(value: unknown): value is Movie {
    if (typeof value !== 'object') {
      return false;
    }
    return (
      this.objectHasMovieKey('director', value) &&
      this.objectHasMovieKey('genre', value) &&
      this.objectHasMovieKey('title', value)
    );
  }

  private objectHasMovieKey(
    key: keyof Movie,
    value: object | null
  ): boolean {
    if (!value) {
      return false;
    }
    return key in value;
  }

}
