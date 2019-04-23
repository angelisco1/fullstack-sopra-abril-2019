import { Injectable } from '@angular/core';
import { Tarea } from './tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private tareas: Array<Tarea> = [
    new Tarea('Ver GoT', false, '0'),
    new Tarea('Acabar la lista de tareas', false, '1'),
  ];

  private idCont: number = 2;

  constructor() { }

  getTareas(): Array<Tarea> {
    return this.tareas;
  }

  getTarea(id: string): Tarea {
    return this.tareas.find(tarea => {
      return tarea.id === id;
    })
  }

  addTarea(nombre: string): void {
    const nuevaTarea = new Tarea(nombre, false, this.idCont+'');
    this.tareas.push(nuevaTarea);
    this.idCont++;
  }

  // deleteTarea(id: string): void {

  // }

  // updateTarea(tarea: Tarea): void {

  // }
}
