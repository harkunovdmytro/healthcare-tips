import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EyeIconComponent } from './components/eye-icon.component';

@NgModule({
  declarations: [EyeIconComponent],
  exports: [
    EyeIconComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
