import { Component } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-cards-alumno',
  templateUrl: './cards-alumno.component.html',
  styleUrls: ['./cards-alumno.component.css']
})
export class CardsAlumnoComponent {
  alumnos!: Alumno[];

  constructor(
    private AlumnoService: AlumnoService
  ) {
    this.alumnos = AlumnoService.obtenerListaAlumnos();
  }



}
