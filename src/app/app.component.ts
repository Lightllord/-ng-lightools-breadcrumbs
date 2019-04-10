import {Component} from '@angular/core';
import {TeldaNgLocksService} from 'lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(locks: TeldaNgLocksService) {
    locks.test();
  }

}
