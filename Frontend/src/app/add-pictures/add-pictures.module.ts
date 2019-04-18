import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPicturesRoutingModule } from './add-pictures-routing.module';
import { FormComponent } from "./form/form.component";
import { WidgetsModule } from "../widgets/widgets.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpinnerComponent } from "../spinner/spinner.component";
import {toPercentage } from "../pipes/toPercentage";

@NgModule({
  declarations: [FormComponent, SpinnerComponent, toPercentage],
  imports: [
    CommonModule,
    AddPicturesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    WidgetsModule
  ]
})
export class AddPicturesModule { }
