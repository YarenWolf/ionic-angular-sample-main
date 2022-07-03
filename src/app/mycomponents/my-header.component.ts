import { element } from 'protractor';
import { AfterContentInit, Component, ContentChild, ElementRef, OnInit, NgModule, ContentChildren, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
import { IonButtons, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss'],
})
export class MyHeaderComponent {
  
  // @ContentChild('leftBtns', {static:false, read: IonButtons}) leftBtns : IonButtons;
  // @ContentChild('rightBtns', {static:true, read: IonButtons}) rightBtns : IonButtons;
  @ContentChild('leftBtns', {static:true, read: ElementRef}) leftBtnsRef : ElementRef;
  @ContentChild('rightBtns', {static:true, read: ElementRef}) rightBtnsRef : ElementRef;
  @ContentChild('title', {static: true, read: ElementRef}) titleRef : ElementRef;
  // @ContentChild(IonButtons) buttons;
  // @ContentChildren(IonToolbar) toolbar;
  // @ViewChild ('barcode', {static:true}) barcode : ElementRef;
  // @ViewChild('leftBtns', {static:true}) leftChild : ElementRef;
  // @ViewChild('rightBtns', {static:true}) rightChild : ElementRef;
  // @ViewChild('other', {static:true}) other : ElementRef;
  
  constructor(private renderer: Renderer2)
  { 
    this.renderer = renderer;
  }  

  ngOnInit(): void {
    console.log('=========ngOnInit=========')
    // console.log(this.leftBtns);
    // console.log(this.rightBtns);
    // console.log(this.leftBtnsRef.nativeElement.clientWidth);
    // console.log(this.rightBtnsRef.nativeElement.clientWidth);
    // console.log(this.title);
    // console.log(this.buttons);
    // console.log(this.toolbar);
    // console.log(this.leftChild);
    // console.log(this.rightChild);
    // console.log(this.other.nativeElement.clientHeight);
  }

  ngAfterContentInit() {
    console.log('=========ngAfterContentInit=========')
    // console.log(this.leftBtns);
    // console.log(this.rightBtns);
    // console.log(this.leftBtnsRef.nativeElement.offsetWidth);
    // console.log(this.rightBtnsRef.nativeElement.offsetWidth);
    // console.log(this.leftBtnsRef.nativeElement.clientWidth);
    // console.log(this.rightBtnsRef.nativeElement.clientWidth);

    // this.renderer.setAttribute(this.leftBtnsRef.nativeElement, 'style', `width:120px`);
    // this.renderer.setAttribute(this.rightBtnsRef.nativeElement, 'style', `width:120px`);
    // console.log(this.title);
    // console.log(this.buttons);
    // console.log(this.toolbar);
    // console.log(this.leftChild);
    // console.log(this.rightChild);
    // console.log(this.other.nativeElement.clientHeight);
  }

  
  // ngAfterViewInit() {
  //   console.log('=========ngAfterViewInit=========')
  //   console.log(this.leftBtns);
  //   console.log(this.rightBtns);
  //   console.log(this.leftBtnsRef.nativeElement.clientHeight);
  //   console.log(this.rightBtnsRef.nativeElement.clientHeight);
  //   console.log(this.title);
  //   console.log(this.buttons);
  //   console.log(this.toolbar);
  //   console.log(this.leftChild);
  //   console.log(this.rightChild);
  //   console.log(this.other.nativeElement.clientHeight);
  // }

  // ngAfterViewChecked(): void {
  //   console.log('=========ngAfterViewChecked=========')
  //   console.log(this.leftBtns);
  //   console.log(this.rightBtns);
  //   console.log(this.leftBtnsRef.nativeElement.clientHeight);
  //   console.log(this.rightBtnsRef.nativeElement.clientHeight);
  //   console.log(this.title);
  //   console.log(this.buttons);
  //   console.log(this.toolbar);
  //   console.log(this.leftChild);
  //   console.log(this.rightChild);
  //   console.log(this.other.nativeElement.clientHeight);
  // }

  ngAfterContentChecked() {
    console.log('=========ngAfterContentChecked=========')
    console.log(this.leftBtnsRef.nativeElement.clientWidth);
    console.log(this.rightBtnsRef.nativeElement.clientWidth);
    console.log(this.leftBtnsRef.nativeElement.childElementCount);
    console.log(this.rightBtnsRef.nativeElement.childElementCount);

    let leftChildCount = this.leftBtnsRef.nativeElement.childElementCount;
    let rightChildCount = this.rightBtnsRef.nativeElement.childElementCount;
    let leftWidth = leftChildCount > 0 ? this.leftBtnsRef.nativeElement.clientWidth : 0
    let rightWidth = rightChildCount > 0 ? this.rightBtnsRef.nativeElement.clientWidth : 0;

    if (leftWidth > 0 || rightWidth > 0) {
      let maxWidth = leftWidth > rightWidth ? leftWidth : rightWidth;
      this.renderer.setAttribute(this.leftBtnsRef.nativeElement, 'style', `width:${maxWidth}px`);
      this.renderer.setAttribute(this.rightBtnsRef.nativeElement, 'style', `width:${maxWidth}px`);
    }


    console.log(this.titleRef);
  }


}
