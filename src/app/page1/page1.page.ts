import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  @ViewChild('header') headerRef : any;

  listData = [...Array(100).keys()];

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  logEvent(event) {
    console.log(event)
  }

  ionViewWillEnter() {
    console.log('****ionViewWillEnter***')
    this.headerRef.refreshLayout()
  }
}
