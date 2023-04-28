import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { opcionMenu } from '../opcionMenu/opcionMenu';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.component.html',
  styleUrls: ['./clase.component.css']
})
export class ClaseComponent {
  constructor(public miServicio:ServicioService){
  }
}
