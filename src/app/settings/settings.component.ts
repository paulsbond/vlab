import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  speeds = [1, 10, 100];
  constructor(public state: StateService) {}
  ngOnInit(): void {}
  onChange() {
    localStorage.setItem('speed', this.state.speed.toString());
  }
}
