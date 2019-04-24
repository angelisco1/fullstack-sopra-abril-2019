import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() onChangeTxtAr = new EventEmitter<string>();
  @Output() onChangeTxtAb = new EventEmitter<string>();
  @Output() onChangeSrcImg = new EventEmitter<string>();
  @Input() srcImg = '';
  @Input() txtAr = '';
  @Input() txtAb = '';

  constructor() { }

  ngOnInit() {
  }

  changeTxtAr(val) {
    this.onChangeTxtAr.emit(val);
  }

  changeTxtAb(val) {
    this.onChangeTxtAb.emit(val);
  }

  changeSrcImg(val) {
    this.onChangeSrcImg.emit(val);
  }

}
