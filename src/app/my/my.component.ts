import { Component, ElementRef, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core';
import { GestureController } from '@ionic/angular';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent {

  @Output() onDrag = new EventEmitter();

  private backgrounds: string[] = ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0.5)', 'rgba(255, 0, 0, 0.5)', 'rgba(255, 255, 0, 0.5)', 'rgba(255, 0, 255, 0.5)', 'rgba(0, 255, 255, 0.5)'];
  private currentColor: string = 'rgba(0, 0, 255, 0.5)';
  private lastOnStart: number = 0;
  private DOUBLE_CLICK_THRESHOLD: number = 500;
  tpl: any;

  constructor(private gestureCtrl: GestureController, private el:ElementRef) {

  }

  ngOnInit() {

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
    for (let i=0; i<10000000; i++) {
      let m = i + 1 /0.5 * 0.5;
      for (let j=0; j<10000000; j++) {
        let n = j + i /5 + 3000 *0.2;
      }
    }
    console.log('onEnd')
  }

  private getRandomBackground() {
    const options = this.backgrounds.filter(bg => bg !== this.currentColor);
    this.currentColor = options[Math.floor(Math.random() * options.length)];

    return this.currentColor;
  }

}


