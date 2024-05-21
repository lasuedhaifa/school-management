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
    return this.http.get(`${this.baseUrl}/tutors/views`);
  }

  getStudentById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/tutors/${id}`);
  }

  addStudent(studentData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/tutors/create`, studentData);
  }

  updateStudent(id: number, updatedStudentData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/tutors/edit/${id}`, updatedStudentData);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/tutors/delete/${id}`);
  }
}