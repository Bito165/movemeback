import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ServicesModule } from 'src/services/services.module';

import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatCheckboxModule, MatDatepickerModule, MatTableModule, MatPaginatorModule, MatNativeDateModule,
    MatSelectModule, ServicesModule, FormsModule
  ]
})
export class SharedModule { }
