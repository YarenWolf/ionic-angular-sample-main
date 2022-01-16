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
        transform : "translate3d(80px, 0px, 0px)",
        transition: null,
      },
      customRightStyle: {
        transform : "translate3d(80px, 0px, 0px)",
        transition: null,
      },
      customBackLeftStyle: {
        width: "0px"
      },
      customBackRightStyle: {
        width: "0px"
      },
    },
    {
      id: "2",
      name: "book2",
      customLeftStyle: {
        transform : "translate3d(80px, 0px, 0px)",
        transition: null
      },
      customRightStyle: {
        transform : "translate3d(80px, 0px, 0px)",
        transition: null
      },
      customBackLeftStyle: {
        width: "0px"
      },
      customBackRightStyle: {
        width: "0px"
      },
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
    this.bookList[i].customRightStyle.transition = 'transform .6s';
    this.bookList[i].customLeftStyle.transition = 'transform .6s';
  }

  onDrag(e, i) {

    this.bookList[i].customRightStyle.transition = null;
    this.bookList[i].customLeftStyle.transition = null;

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

        if (ratio > 0) {
          this.bookList[i].customBackRightStyle.width = `${Math.abs(data)}px`;
        } else if (ratio < 0) {
          this.bookList[i].customBackLeftStyle.width = `${Math.abs(data)}px`;
        }

      })
      console.log(data)
    })
  }

  onItemSlidingTouchEnd(e, i) {
    this.bookList[i].customRightStyle.transition = 'transform 500ms cubic-bezier(.36, .66, .04, 1)';
    this.bookList[i].customLeftStyle.transition = 'transform 500ms cubic-bezier(.36, .66, .04, 1)';

    e.currentTarget.getOpenAmount().then(data => {
      if (Math.abs(data) <= this.customWidth/2) {
        this.bookList[i].customRightStyle.transform = `translate3d(${this.customWidth}px, 0px, 0px)`;
        this.bookList[i].customLeftStyle.transform = `translate3d(-${this.customWidth}px, 0px, 0px)`;
      }
      console.log(data)
    })
  }

}
