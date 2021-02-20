import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HumanReadablePipe } from './pipes/human-readable/human-readable.pipe';
import { DragDropDirective } from './directives/dragDrop/drag-drop.directive';

@NgModule({
  declarations: [HumanReadablePipe, DragDropDirective],
  imports: [
    CommonModule
  ],
  exports: [HumanReadablePipe, DragDropDirective]
})
export class ServicesModule { }
