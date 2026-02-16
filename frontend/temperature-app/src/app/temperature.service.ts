import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {
  
  private apiUrl = 'http://localhost:5244/api/temperature';

  constructor(private http: HttpClient) { }

  convert(type: string, value: number): Observable<any> {
      
    return this.http.get<any>(`${this.apiUrl}/${type}?${this.getQueryParam(type)}=${value}`);
  }

  private getQueryParam(type: string): string {
    if (type === 'c-to-f' || type === 'c-to-k') return 'celsius';
    if (type === 'f-to-c') return 'fahrenheit';
    if (type === 'k-to-c') return 'kelvin';
    return '';
  }
}