import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './core/principal/principal.component';
import { LayoutComponent } from './panel/layout/layout.component';

const routes: Routes = [
  {path:'', component: PrincipalComponent},
  {path:'panel', component: LayoutComponent,
    children:[
      { path: '', loadChildren: () => import('./componentes/inicio/inicio.module').then(m => m.InicioModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
