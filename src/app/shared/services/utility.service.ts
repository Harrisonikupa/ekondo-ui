import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  renameKey(object: any, key: any, newKey: any) {
    const clonedObject = this.objectClone(object);
    const targetKey = clonedObject[key];

    delete clonedObject[key];
    clonedObject[newKey] = targetKey;

    return clonedObject;
  }

  objectClone(object: any) {
    return Object.assign({}, object);
  }
}
