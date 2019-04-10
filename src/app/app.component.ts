import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  param;

  constructor(private router: Router) {
  }

  toComp1() {
    if (this.param) {
      this.router.navigate(['comp1', {param: this.param}]);
    }
  }
}
