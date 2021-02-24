import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ServicesModule } from 'src/services/services.module';

import {MatTableModule} from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import { ButtonSolidComponent } from './components/buttons/button-solid/button-solid.component';
import { InputComponent } from './components/form-elements/input/input.component';
import { InterestCardComponent } from './components/cards/interest-card/interest-card.component';
import {OptionBadgesComponent} from './components/form-elements/option-badges/option-badges.component';
import { FormComponent } from './components/form-elements/form/form.component';


@NgModule({
    declarations: [ButtonSolidComponent, InputComponent, InterestCardComponent, OptionBadgesComponent, FormComponent],
    imports: [
        CommonModule, MatTableModule, MatPaginatorModule, MatNativeDateModule,
        MatSelectModule, ServicesModule, FormsModule
    ],
  exports: [ButtonSolidComponent, InputComponent, InterestCardComponent, OptionBadgesComponent, FormComponent]
})
export class SharedModule { }
