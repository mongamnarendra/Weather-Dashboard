import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WheatherService {

  private baseUrl="https://api.openweathermap.org/data/2.5/weather";
  private apiKey="abac9c04d74aa75fe411b926e542977f";
  constructor(private http:HttpClient) { }

  getByCity(city:string):Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}?q=${city}&appid=${this.apiKey}&units=metric`)
  }
}
