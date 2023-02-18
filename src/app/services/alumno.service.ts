import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private alumnos: Alumno[] = [
    {
      alumno: {
        nombre: 'Jose',
        apellido: 'Paez',
        correo: 'jose@gmail.com',
        estado: true,
        fechaRegistro: new Date(2022, 6, 3),
      },
      curso: 'React',
      comision: '2378'
    },
    {
      alumno: {
        nombre: 'Luis',
        apellido: 'Fernandez',
        correo: 'Luis@gmail.com',
        estado: true,
        fechaRegistro: new Date(2023, 0, 28),
      },
      curso: 'Angular',
      comision: '3354'
    },
    {
      alumno: {
        nombre: 'Mario',
        apellido: 'Ramos',
        correo: 'Mario@gmail.com',
        estado: false,
        fechaRegistro: new Date(2021, 10, 16),
      },
      curso: 'Vue',
      comision: '3951'
    },
    {
      alumno: {
        nombre: 'Alberto',
        apellido: 'Diaz',
        correo: 'Alberto@gmail.com',
        estado: false,
        fechaRegistro: new Date(2022, 8, 2),
      },
      curso: 'Javascript',
      comision: '1984'
    },
    {
      alumno: {
        nombre: 'Juan',
        apellido: 'Merlo',
        correo: 'Juan@gmail.com',
        estado: true,
        fechaRegistro: new Date(2022, 11, 24),
      },
      curso: 'Javascript',
      comision: '3864'
    },

  ];


  constructor() { }

  obtenerListaAlumnosPromise(): Promise<Alumno[]> {
    return new Promise((resolve, reject) => {
      if (this.alumnos.length > 0) {
        resolve(this.alumnos);
      } else {
        reject({
          codigo: 0,
          descripcion: 'Arreglo vacío',
        });
      }
    });
  }

  obtenerListaAlumnosObservable(): Observable<Alumno[]> {
    return new Observable<Alumno[]>((suscriptor) => {
      suscriptor.next(this.alumnos);
    });
  }



  /* obtenerListaAlumnos(): Array<Alumno> {
    return this.alumnos;
  } */
}
