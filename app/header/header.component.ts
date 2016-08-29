import { Component } from '@angular/core';
import { TrackScrollDirective } from '../directives/trackscroll.directive';

@Component({
    selector:'my-header',
    templateUrl: 'app/header/header.component.html',
    styleUrls: ['app/header/header.component.css'],
    directives: [TrackScrollDirective]
})
export class HeaderComponent{
    shrinkCssClass : string = '';

    onScrolled(yPos : number) {
        this.shrinkCssClass = yPos ? "shrink-header" : "";
    }
}