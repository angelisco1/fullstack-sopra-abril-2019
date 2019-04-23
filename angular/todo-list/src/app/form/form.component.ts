import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formTarea: FormGroup;

  constructor(private tareasService: TareasService) { }

  ngOnInit() {
    this.formTarea = new FormGroup({
      nombre: new FormControl('', Validators.required)
    });
  }

  guardar() {
    console.log(this.formTarea.value.nombre);
    this.tareasService.addTarea(this.formTarea.value.nombre);

    this.formTarea.reset();
  }

}
