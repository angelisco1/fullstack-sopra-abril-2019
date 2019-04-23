import { Component, OnInit } from '@angular/core';
import { interval, Subscription, Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-cmp-observables',
  templateUrl: './cmp-observables.component.html',
  styleUrls: ['./cmp-observables.component.css']
})
export class CmpObservablesComponent implements OnInit {

  subscriptions: Array<Subscription> = [];
  constructor() { }

  ngOnInit() {
    this.obsIntervalo();
    this.obsMsg();
  }

  obsMsg() {
    const miObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next("Hola Angel");
      }, 1000);

      setTimeout(() => {
        observer.next("Hola, que tal?");
      }, 2000);

      setTimeout(() => {
        // observer.next("Muy bien");
        // observer.error("Se corta, no te oigo bien");
        observer.complete();
      }, 2500);

      setTimeout(() => {
        observer.next("Hola, que tal?");
      }, 4000);
    });
    const subs = miObservable.subscribe(
      (msg: string) => console.log(msg),
      (err) => console.log(err)
    );
    this.subscriptions.push(subs);
  }

  obsIntervalo() {
    const miObservable = interval(1000);
    const subscription = miObservable.subscribe((dato) => {
      console.log(dato);
    });
    this.subscriptions.push(subscription);
  }

  desubscribirnos() {
    this.subscriptions.forEach((subs) => {
      subs.unsubscribe();
    })
  }

  ngOnDestroy() {
    this.desubscribirnos();
  }
}
