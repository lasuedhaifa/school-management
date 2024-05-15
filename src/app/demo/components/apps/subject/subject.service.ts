import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private baseUrl = 'https://localhost:8000/api/'; 
  constructor(private http: HttpClient) { }

  getAllTSubjects(): Observable<any> {
    return this.http.get(`${this.baseUrl}/subjects/views`);
  }

  getSubjectById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/subjects/${id}`);
  }

  addSubject(subjectData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/subjects/create`, subjectData);
  }

  deleteSubject(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/subjects/delete/${id}`);
  }
}