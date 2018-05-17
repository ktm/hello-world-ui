import {Component, OnInit} from '@angular/core';
import {GreetingService} from "./service/greeting.service";

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello World</h1>
  `
})
export class AppComponent implements OnInit {

    constructor(private service: GreetingService) {
        super(service);
    }

    ngOnInit(): void {
      this.service.
    }

}
