import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-event-binding',
  templateUrl: './cmp-event-binding.component.html',
  styleUrls: ['./cmp-event-binding.component.css']
})
export class CmpEventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  saludar(event) {
    console.log(event);
    alert('Hola...');
  }
}
