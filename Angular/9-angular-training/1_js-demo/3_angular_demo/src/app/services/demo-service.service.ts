import { Injectable } from '@angular/core';

@Injectable()
export class DemoServiceService {
  public total: number = 0;

  constructor() { }

  sum(a: any, b: any) {
    this.total = a + b;
    return a + b
  }

}
