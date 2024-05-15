import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private baseUrl = 'https://localhost:8000/api/'; 
  constructor(private http: HttpClient) { }

  getAllClasss(): Observable<any> {
    return this.http.get(`${this.baseUrl}/class/views`);
  }

  getClassById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/class/${id}`);
  }

  addClass(classData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/class/create`, classData);
  }

  updateClass(id: number, updatedClassData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/class/edit/${id}`, updatedClassData);
  }

  deleteClass(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/class/delete/${id}`);
  }
}