import { element } from 'protractor';
import {Component, ContentChild, ElementRef, Renderer2} from '@angular/core';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss'],
})
export class MyHeaderComponent {
  
  @ContentChild('leftBtns', {static:true, read: ElementRef}) leftBtnsRef : ElementRef;
  @ContentChild('rightBtns', {static:true, read: ElementRef}) rightBtnsRef : ElementRef;
  
  constructor(private renderer: Renderer2, private el:ElementRef)
  { 
    this.renderer = renderer;
  }  

  refreshLayout() {
    console.log('=========refreshLayout=========')
    let leftChildCount = this.leftBtnsRef.nativeElement.childElementCount;
    let rightChildCount = this.rightBtnsRef.nativeElement.childElementCount;
    let leftWidth = leftChildCount > 0 ? this.leftBtnsRef.nativeElement.clientWidth : 0
    let rightWidth = rightChildCount > 0 ? this.rightBtnsRef.nativeElement.clientWidth : 0;

    let maxWidth = leftWidth > rightWidth ? leftWidth : rightWidth;
    this.renderer.setAttribute(this.leftBtnsRef.nativeElement, 'style', `width:${maxWidth}px`);
    this.renderer.setAttribute(this.rightBtnsRef.nativeElement, 'style', `width:${maxWidth}px`);
  } 


}
