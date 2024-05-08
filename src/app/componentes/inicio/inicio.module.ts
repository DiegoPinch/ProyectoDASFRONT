import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';

import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { TecnologicosService } from '../../core/service/tecnologicos.service';

import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MenuModule,
    TableModule,
    ButtonModule
  ],
  exports: [
    InicioComponent
  ],
  providers: [
    TecnologicosService
  ],
})
export class InicioModule { }
