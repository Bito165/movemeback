import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HumanReadablePipe } from './pipes/human-readable/human-readable.pipe';
import { DragDropDirective } from './directives/dragDrop/drag-drop.directive';
import { TrustedURLPipe } from './pipes/trustedURL/trusted-url.pipe';

@NgModule({
  declarations: [HumanReadablePipe, DragDropDirective, TrustedURLPipe],
  imports: [
    CommonModule
  ],
  exports: [HumanReadablePipe, DragDropDirective]
})
export class ServicesModule { }
