import { Injectable, EventEmitter } from '@angular/core';
import { Tarea } from './tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private tareas: Array<Tarea> = [
    new Tarea('Ver GoT', true, '0'),
    new Tarea('Acabar la lista de tareas', false, '1'),
  ];
  private idCont: number = 2;
  sendTarea = new EventEmitter<Tarea>();

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

  deleteTarea(tarea: Tarea): void {
    const pos = this.tareas.indexOf(tarea);
    this.tareas.splice(pos, 1);
  }

  updateTarea(tareaVieja: Tarea, tareaNueva: Tarea): void {
    const pos = this.tareas.indexOf(tareaVieja);
    this.tareas[pos] = tareaNueva;
  }

  sendTareaToEdit(tarea: Tarea): void {
    this.sendTarea.emit(tarea);
  }
}
