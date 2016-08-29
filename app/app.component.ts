import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'my-app',
  template: '<my-header></my-header><div style="height: 2048px; border: solid 1px #000;">Some scrollable content.</div>',
  directives: [HeaderComponent]
})
export class AppComponent { }
