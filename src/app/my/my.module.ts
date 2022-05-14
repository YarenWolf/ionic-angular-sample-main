import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyComponent } from './my.component';


@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [MyComponent],
  exports: [MyComponent]
})
export class MyComponentModule {}
