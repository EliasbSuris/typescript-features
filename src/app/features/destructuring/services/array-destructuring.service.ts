import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayDestructuringService {
  private numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  private arrayWithFalsyValues = [null, undefined, 0, 'a', 'b'];
  private defaultValue = 'keep undefined out of here!'
  private minMaxArray = [0, 100];
  constructor() {
    console.log('%c------------ARRAYS-------------', "color: blue; font-size: 30px");
    // GET FIRST ELEMENT
    const [firstElement] = this.numberArray;
    console.log('%cGET FIRST ELEMENT', "color: red; font-size: 20px");
    console.log('The first element of the ', this.numberArray);
    console.log('is ', firstElement);

    // GET SECOND AND THIRD ELEMENT
    const [,secondElement, thirdElement] = this.numberArray;
    console.log('%cGET SECOND AND THIRD ELEMENT', "color: red; font-size: 20px");
    console.log('The second element of the ', this.numberArray);
    console.log('is ', secondElement);
    console.log('The third element of the ', this.numberArray);
    console.log('is ', thirdElement);

    // GET ELEMENTS WITH DEFAULT VALUES
    const [nullValue = this.defaultValue, undefinedValue = this.defaultValue, falsyValue = this.defaultValue] = this.arrayWithFalsyValues;
    console.log('%cSET A DEFAULT VALUE TO AVOID UNDEFINED VALUES', "color: red; font-size: 20px");
    console.log('nullValue should be null: ', nullValue);
    console.log('undefinedValue should be default value: ', undefinedValue);
    console.log('falsyValue should be a falsy value ', falsyValue);

    // REST OPERATOR
    const [, ...firstElementRemoved] = this.numberArray;
    console.log('%cGET ELEMENTS FROM AN ARRAY SKIPPING FIRST ELEMENT', "color: red; font-size: 20px");
    console.log('The original array: ', this.numberArray);
    console.log('New array without first element: ', firstElementRemoved);

    const [add, sub, mult, div] = this.arithmeticsOperations(10, 10);
    console.log('%cARITHMETICS OPERATIONS', "color: red; font-size: 20px");
    console.log('10 + 10 =', add);
    console.log('10 - 10 =', sub);
    console.log('10 * 10 =', mult);
    console.log('10 / 10 =', div);
   }

  public getFirstElement<T>(array: T[]): T {
    const [first] = array ?? [];
    return first;
  }

  public arithmeticsOperations(a: number, b: number): number[] {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide];
  }

}
