import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'app-view-lodash',
  templateUrl: './view-lodash.component.html',
  styleUrls: ['./view-lodash.component.css']
})
export class ViewLodashComponent implements OnInit {

  list = _.map([1,2,3,4,5,6], (n) => `# ${n}`);

  constructor() { }

  ngOnInit() {
  }

}
