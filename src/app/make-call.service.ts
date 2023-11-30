import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MakeCallService {
  private apiUrl = 'https://catfact.ninja/fact';
  private timeUrl = 'https://api.sunrise-sunset.org/json';
  constructor(private http: HttpClient) {}

  getFact(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getSunriseSunset(lat: number, lon: number, date: string): Observable<any> {
    const params = new HttpParams()
      .set('lat', lat.toString())
      .set('lon', lon.toString())
      .set('date', date);

    return this.http.get<any>(this.timeUrl, { params });
  }
}