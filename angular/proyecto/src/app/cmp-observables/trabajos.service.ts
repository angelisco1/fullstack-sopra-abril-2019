import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrabajosService {
  private URL = 'https://fluentjobs-fa22e.firebaseio.com/trabajos';

  constructor(private http: HttpClient) { }

  getOfertas() {
    return this.http.get(`${this.URL}.json`)
  }
}
