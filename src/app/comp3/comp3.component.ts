import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
  param;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(res => {
      this.param = res.get('id');
    });
  }

  ngOnInit() {

  }

}
