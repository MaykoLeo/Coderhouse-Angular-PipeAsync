import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-cards-alumno',
  templateUrl: './cards-alumno.component.html',
  styleUrls: ['./cards-alumno.component.css']
})
export class CardsAlumnoComponent implements OnInit {
  alumnos!: Alumno[];

  constructor(
    private AlumnoService: AlumnoService
  ) { }

  ngOnInit(): void {
    this.AlumnoService.obtenerListaAlumnosPromise().then((alumnos: Alumno[]) => {
      this.alumnos = alumnos;
    }).catch((error: any) => {
      console.log('Error en el Promise', error);
    });
  }


}
