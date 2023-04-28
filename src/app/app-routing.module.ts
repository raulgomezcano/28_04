import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaseComponent } from './clase/clase.component';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { InformacionComponent } from './informacion/informacion.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { PaisComponent } from './pais/pais.component';

const routes: Routes = [
  {path:'',component:ClaseComponent,children:[
    {path:'inicio', component:InicioComponent},
    {path:'perfil', component:PerfilComponent},
    {path:'informacion', component:InformacionComponent},
    {path:'configuracion', component:ConfiguracionComponent},
    {path:'pais', component:PaisComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
