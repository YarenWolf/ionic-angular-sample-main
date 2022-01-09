import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public isPopover = false;

  bookList = [
    {
      id: "1",
      name: "book1",
      customLeftStyle: {
        transform : "translate3d(80px, 0px, 0px)"
      },
      customRightStyle: {
        transform : "translate3d(80px, 0px, 0px)"
      }
    },
    {
      id: "2",
      name: "book2",
      customLeftStyle: {
        transform : "translate3d(80px, 0px, 0px)"
      },
      customRightStyle: {
        transform : "translate3d(80px, 0px, 0px)"
      }
    }
  ]

  customWidth = 100;

  customLeftStyle = {
    transform : "translate3d(80px, 0px, 0px)"
  }

  customRightStyle = {
    transform : "translate3d(80px, 0px, 0px)"
  }

  constructor() {}

  openPopover() {
    if (this.isPopover) {
      this.isPopover = false;
    } else {
      this.isPopover = true;
    }
  }

  onSwipe() {
    console.log('111');
  }

  onItemClick() {
    console.log('itemClick');
  }

  onItemSlidingClick(e, i) {
    console.log('onItemSlidingClick');
    e.currentTarget.close();
    this.bookList[i].customRightStyle.transform = `translate3d(${this.customWidth}px, 0px, 0px)`;
    this.bookList[i].customLeftStyle.transform = `translate3d(-${this.customWidth}px, 0px, 0px)`;
  }

  onDrag(e, i) {

    e.target.getOpenAmount().then(data => {
      
      e.target.getSlidingRatio().then(ratio => {

        if (Math.abs(data) <= this.customWidth) {
          if (ratio > 0) {
            // item.setCssStyle("transform", "translate3d(-144px, 0px, 0px)")
            this.bookList[i].customRightStyle.transform = `translate3d(${this.customWidth-data}px, 0px, 0px)`;
          } else if (ratio < 0) {
            this.bookList[i].customLeftStyle.transform = `translate3d(-${this.customWidth+data}px, 0px, 0px)`;
          }
        }
      })
      console.log(data)
    })
  }

  onItemSlidingTouchEnd(e, i) {
    e.currentTarget.getOpenAmount().then(data => {
      if (Math.abs(data) <= this.customWidth/2) {
        this.bookList[i].customRightStyle.transform = `translate3d(${this.customWidth}px, 0px, 0px)`;
        this.bookList[i].customLeftStyle.transform = `translate3d(-${this.customWidth}px, 0px, 0px)`;
      }
      console.log(data)
    })
  }

}
