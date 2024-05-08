import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TecnologicosRoutingModule } from './tecnologicos-routing.module';
import { TecnologicosComponent } from './tecnologicos.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

//import { TableDemoComponent } from './tabledemo.component';
//import { TableDemoRoutingModule } from './tabledemo-routing.module';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RippleModule } from 'primeng/ripple';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  declarations: [
    TecnologicosComponent
  ],
  imports: [
    CommonModule,
    TecnologicosRoutingModule,
    TableModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    ToastModule,
    RatingModule,
    ToolbarModule
  ]
})
export class TecnologicosModule { }
