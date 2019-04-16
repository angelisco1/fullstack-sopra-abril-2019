import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() onChangeTxtAr = new EventEmitter<string>();
  @Output() onChangeTxtAb = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  changeTxtAr(val) {
    this.onChangeTxtAr.emit(val);
  }

  changeTxtAb(val) {
    this.onChangeTxtAb.emit(val);
  }

}
