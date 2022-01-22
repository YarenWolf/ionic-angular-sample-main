import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { GestureController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  private backgrounds: string[] = ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0.5)', 'rgba(255, 0, 0, 0.5)', 'rgba(255, 255, 0, 0.5)', 'rgba(255, 0, 255, 0.5)', 'rgba(0, 255, 255, 0.5)'];
  private currentColor: string = 'rgba(0, 0, 255, 0.5)';
  private lastOnStart: number = 0;
  private DOUBLE_CLICK_THRESHOLD: number = 500;
  tpl: any;

  constructor(private gestureCtrl: GestureController, private el:ElementRef) {

  }

  ngOnInit() {
    console.log(this.el.nativeElement);
    console.log(this.el.nativeElement.querySelector('.rectangle'));
    this.tpl = this.el.nativeElement.querySelector('.rectangle')
    const gesture = this.gestureCtrl.create({
      el: this.tpl,
      threshold: 0,
      onStart: () => { this.onStart(); },
      onMove: () => { this.onMove(); },
      onEnd: () => { this.onEnd(); },
      gestureName: ''
    });

    gesture.enable();
  }

  private onStart() {
    console.log('onStart')
    const now = Date.now();

    if (Math.abs(now - this.lastOnStart) <= this.DOUBLE_CLICK_THRESHOLD) {
      this.tpl.style.setProperty('background', this.getRandomBackground());
      this.lastOnStart = 0;
    } else {
      this.lastOnStart = now;
    }
  }

  private onMove() {
    console.log('onMove')
  }

  private onEnd() {
    console.log('onEnd')
  }

  touchStart(e) {
    console.log('touchStart')
  }

  touchEnd(e) {
    console.log('touchEnd')
  }

  private getRandomBackground() {
    const options = this.backgrounds.filter(bg => bg !== this.currentColor);
    this.currentColor = options[Math.floor(Math.random() * options.length)];

    return this.currentColor;
  }

}


