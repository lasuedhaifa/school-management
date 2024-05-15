import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private baseUrl = 'https://localhost:8000/api/'; 
  constructor(private http: HttpClient) { }

  getAllTeachers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/teachers/views`);
  }

  getTeacherById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/teachers/${id}`);
  }

  addTeacher(teacherData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/teachers/create`, teacherData);
  }

  updateTeacher(id: number, updatedTeacherData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/teachers/edit/${id}`, updatedTeacherData);
  }

  deleteTeacher(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/teachers/delete/${id}`);
  }
}