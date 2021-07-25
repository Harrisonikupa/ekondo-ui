import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  show(): void {
    var loader = document.getElementById('loading-overlay');
    loader?.classList.remove('d-none');
    loader?.classList.add('d-block');
  }

  hide(): void {
    var loader = document.getElementById('loading-overlay');
    loader?.classList.remove('d-block');
    loader?.classList.add('d-none')
  }
}
