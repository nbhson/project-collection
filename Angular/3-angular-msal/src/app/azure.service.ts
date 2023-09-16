import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AzureService {
  isUserlogged: Subject<boolean> = new Subject<boolean>();
  constructor() { }
}
