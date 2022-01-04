import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public isPopover = false;

  constructor() {}

  openPopover() {
    if (this.isPopover) {
      this.isPopover = false;
    } else {
      this.isPopover = true;
    }
  }

}
