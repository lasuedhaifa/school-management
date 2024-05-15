import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'https://localhost:8000/api/'; 
  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<any> {
    return this.http.get(`${this.baseUrl}/students/views`);
  }

  getStudentById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/students/${id}`);
  }

  addStudent(studentData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/students/create`, studentData);
  }

  updateStudent(id: number, updatedStudentData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/students/edit/${id}`, updatedStudentData);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/students/delete/${id}`);
  }
}