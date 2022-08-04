import { Injectable } from '@angular/core';
import kmno4 from './data/kmno4';
import caffeine from './data/caffeine';
import alcohol from './data/alcohol';
import salt from './data/salt';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  experiments = {
    "alcohol": alcohol,
    "caffeine": caffeine,
    "kmno4": kmno4,
    "salt": salt,
  };
  speed = parseInt(localStorage.getItem('speed')) || 1;

  constructor() { }
}
