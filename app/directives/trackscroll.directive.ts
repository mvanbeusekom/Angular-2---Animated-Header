import { Directive, EventEmitter, Output, HostListener } from '@angular/core';

@Directive({
    selector: '[track-scroll]',
    host: {'(window:scroll)': 'track($event)'},
})
export class TrackScrollDirective {
  @Output() scrolled:EventEmitter<any> = new EventEmitter();

  track(event:any) {
    this.scrolled.emit(document.body.scrollTop);
  }
}