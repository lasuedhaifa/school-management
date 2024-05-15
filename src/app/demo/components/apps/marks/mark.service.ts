import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarkService {
  private baseUrl = 'https://localhost:8000/api/'; 
  constructor(private http: HttpClient) { }

  getAllMarks(): Observable<any> {
    return this.http.get(`${this.baseUrl}/marks/views`);
  }

  getMarkById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/marks/${id}`);
  }
}