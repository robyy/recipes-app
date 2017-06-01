import {Component, OnInit} from '@angular/core';

@Component({
  // selector: '[app-servers]', // just like css attribute selector
  // selector: '.app-servers', // notice that id selector not supported, other pseudo selectors like a:hover also don't work
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

}
