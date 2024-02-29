import { Injectable } from '@angular/core';

interface Car {
  model: string;
  brand: string;
  year: number;
  color: string
}

interface Ferrari {
  model: string;
  year: number;
  color: string
}

interface Movie {
  director: {
    name?: string;
    age: number;
  };
  title?: string
}

@Injectable({
  providedIn: 'root'
})
export class ObjectDestructuringService {
  private myFerrari: Ferrari = {
    color: 'red',
    model: 'Enzo',
    year: 2020
  }
  private myCar: Car = {
    brand: 'Ferrari',
    color: 'red',
    model: 'Enzo',
    year: 2020
  }

  private operaMagna: Movie = {
    director: {
      age: 35,
      name: 'Rodolfo Langostino'
    },
    title: 'Opera magna'
  }

  private unknownMovie: Movie = {
    director: {
      age: 20,
    }
  }

  constructor() {
    console.log('%c------------OBJECTS-------------', "color: blue; font-size: 30px");

    console.log('%cDATA EXTRACTION FROM OBJECT', "color: red; font-size: 20px");
    const { model } = this.myFerrari;
    console.log('The model of my Ferrari is ', model);

    console.log('%cDATA EXTRACTION FROM OBJECT & REST OPERATOR', "color: red; font-size: 20px");
    const { brand, ...trustMeIAmAFerrari } = this.myCar;
    console.log(`Trust me its a ${brand}`, );
    console.log(`%c${JSON.stringify(trustMeIAmAFerrari)}`, "color: grey");

    console.log('%cDATA EXTRACTION FROM OBJECT & REST OPERATOR & RENAME KEY', "color: red; font-size: 20px");
    const { brand: ferrariBrand, ...other } = this.myCar;
    console.log(`Trust me its a ${ferrariBrand}`);
    console.log(`%c${JSON.stringify(other)}`, "color: grey");

    console.log('%cDEEP DATA EXTRACTION FROM OBJECT', "color: red; font-size: 20px");
    const { director: { name }, title } = this.operaMagna;
    console.log(`The movie ${title} was directed by ${name}`);

    console.log('%cDATA EXTRACTION FROM OBJECT & DEFAULT VALUE', "color: red; font-size: 20px");
    console.log(`The movie doesnt have title and director name`);
    console.log(`%c${JSON.stringify(this.createCompleteMovie(this.unknownMovie))}`, "color: grey");

    console.log('%cDESTRUCTURING HELPS ON METHODS', "color: red; font-size: 20px");
    console.log(`I would like to divide 10 by 2, but oops! `, this.divideProneToErrors(2, 10));
    console.log(`Oops, what a mess! parameters order matter `, this.divideProneToErrors(10, 2));
    console.log(`Maybe...we need a little bit of help, lets try again!`, this.divideSecured({ dividend: 10, divisor: 2 }));
    console.log(`Now the order doesnt matter!`, this.divideSecured({ divisor: 2, dividend: 10 }));


   }

   public isCarColorRed({color}: Car): boolean {
    return color === 'red';
   }

   public createCompleteMovie({ title = 'Unknown', director: { age, name = 'Unknown' } }: Movie): Required<Movie> {
    return {
      director: {
        age,
        name
      },
      title
    }
   }

   public divideProneToErrors(a: number, b: number): number {
    return a/b;
   }

   public divideSecured({dividend, divisor}: {dividend: number, divisor: number}): number {
    return dividend/divisor;
   }
}
