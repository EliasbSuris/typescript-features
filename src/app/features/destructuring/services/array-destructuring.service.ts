import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayDestructuringService {
  private numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  private arrayWithFalsyValues = [null, undefined, 0, 'a', 'b'];
  private defaultValue = 'keep undefined out of here!'
  private notDefinedArray!: number[];
  private nullArray: any = null;

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
    console.log('The original array: ');
    console.log(`%c${JSON.stringify(this.numberArray)}`, "color: grey");
    console.log('New array without first element: ', firstElementRemoved);

    // METHOD RETURNING AN ARRAY
    const [add, sub, mult, div] = this.arithmeticsOperations(10, 10);
    console.log('%cARITHMETICS OPERATIONS', "color: red; font-size: 20px");
    console.log('10 + 10 =', add);
    console.log('10 - 10 =', sub);
    console.log('10 * 10 =', mult);
    console.log('10 / 10 =', div);

    console.log('%cMEHTODS', "color: red; font-size: 20px");
    console.log('getFirstElement');
    console.log(`%c${JSON.stringify(this.getFirstElement(this.numberArray))}`, "color: grey");
    console.log('removeFirstElement');
    console.log(`%c${JSON.stringify(this.removeFirstElement(this.numberArray))}`, "color: grey");

    try {
      console.log('removeFirstElement undefined array gonna fail')
      this.removeFirstElement(this.notDefinedArray);
    } catch(e) {
      console.error(e);
    }
    try {
      console.log('removeFirstElement null element gonna fail')
       this.removeFirstElement(this.nullArray);
    } catch(e) {
      console.error(e);
    }
    console.log('removeFirstElementUndefProtection undefined array');
    console.log(`%c${JSON.stringify(this.removeFirstElementUndefProtection(this.notDefinedArray))}`, "color: grey");
    console.log('removeFirstElement');
    console.log(`%c${JSON.stringify(this.removeFirstElementUndefProtection(this.numberArray))}`, "color: grey");

    console.log('%REST OPERATOR', "color: red; font-size: 20px");
    const a = [1, 2, 3];
    const b = [3, 4, 5];
    const c = [6, 7, 8];
    this.concatOrCreateNumberArray(...a, ...b);
    console.log('Lets concat these arrays:');
    console.log(`%c${JSON.stringify(a)}`, "color: grey");
    console.log(`%c${JSON.stringify(b)}`, "color: grey");
    console.log(`%c${JSON.stringify(c)}`, "color: grey");
    console.log('Result:');
    console.log(`%c${JSON.stringify(this.concatOrCreateNumberArray(...a, ...b, ...c))}`, "color: grey");
    const d = 1;
    const e = 2;
    const f = 3;
    console.log('Lets create a number array from loose numbers:');
    console.log(`%c${JSON.stringify(this.concatOrCreateNumberArray(d, e, f))}`, "color: grey");

   }

  // USE CASES


  public arithmeticsOperations(a: number, b: number): number[] {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide];
  }

  public getFirstElement<T>(array: T[]): T {
    const [first] = array ?? [];
    return first;
  }

  public removeFirstElement<T>([, ...others]: T[]): T[] {
    return others;
  }

  public removeFirstElementUndefProtection<T>([, ...others]: T[] = []): T[] {
    return others;
  }

  public concatOrCreateNumberArray<T>(...arrays: T[]): T[] {
    return arrays;
  }
}
