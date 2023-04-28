import { Injectable } from '@angular/core';
import { opcionMenu } from './opcionMenu/opcionMenu';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor() { }
  listaMenu:opcionMenu[]=[
    new opcionMenu('home', 'Inicio', '/inicio'),
    new opcionMenu('person', 'Perfil', '/perfil'),
    new opcionMenu('info', 'Informacion', '/informacion'),
    new opcionMenu('settings', 'Configuracion', '/configuracion'),
    new opcionMenu('public', 'Pais', '/pais'),
  ]
}
