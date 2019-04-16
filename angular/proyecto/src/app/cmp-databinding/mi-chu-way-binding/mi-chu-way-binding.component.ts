import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-chu-way-binding',
  templateUrl: './mi-chu-way-binding.component.html',
  styleUrls: ['./mi-chu-way-binding.component.css']
})
export class MiChuWayBindingComponent implements OnInit {

  producto: string = "One+ 7";

  constructor() { }

  ngOnInit() {
  }

  changeProduct(val: string = "") {
    this.producto = val;
  }
}
