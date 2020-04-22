import { Injectable } from '@angular/core';

@Injectable()
export class BSArrays {

  constructor() {
  }


  removerItem(array, item) {
    let indexOf = array.indexOf(item)
    array.splice(indexOf, 1)
  }
}
