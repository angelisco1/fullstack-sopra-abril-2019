import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TareasService } from '../tareas.service';
import { Tarea } from '../tarea';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formTarea: FormGroup;
  esNuevaTarea = true;
  editarTarea: Tarea;

  constructor(private tareasService: TareasService, private activatedR: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.inicializarForm();
    this.activatedR.paramMap.subscribe(params => {
      if (params.has('idTarea')) {
        this.esNuevaTarea = false;
        this.tareasService.getTarea(params.get('idTarea')).subscribe(tarea => {
          this.editarTarea = tarea
          this.inicializarForm();
        });
      }
    });
  }

  inicializarForm() {
    let nombreTarea = this.esNuevaTarea ? '' : this.editarTarea.nombre;
    this.formTarea = new FormGroup({
      nombre: new FormControl(nombreTarea, Validators.required)
    });
  }

  guardar() {
    let nombreTarea = this.formTarea.value.nombre;
    console.log(nombreTarea);

    if (this.esNuevaTarea) {
      this.tareasService.addTarea(nombreTarea).subscribe(() => {
        this.router.navigate(['/'])
      });

    } else {
      const tareaActualizada = new Tarea(nombreTarea, this.editarTarea.completa, this.editarTarea.id);

      this.tareasService.updateTarea(tareaActualizada).subscribe(() => {
        this.router.navigate(['/'])
      });
    }

    this.formTarea.reset();
    this.esNuevaTarea = true;
  }

}
