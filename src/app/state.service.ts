import { Injectable } from '@angular/core';
import alcohol from './data/alcohol';
import caffeine from './data/caffeine';
import ferrocene from './data/ferrocene';
import kmno4 from './data/kmno4';
import salt from './data/salt';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  experiments = {
    "alcohol": alcohol,
    "caffeine": caffeine,
    "ferrocene": ferrocene,
    "kmno4": kmno4,
    "salt": salt,
  };
  speed = parseInt(localStorage.getItem('speed')) || 1;

  constructor() { }
}
