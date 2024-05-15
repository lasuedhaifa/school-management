import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  private baseUrl = 'https://localhost:8000/api/'; 
  constructor(private http: HttpClient) { }

  getAllTEvaluations(): Observable<any> {
    return this.http.get(`${this.baseUrl}/evaluations/views`);
  }

  getEvaluationById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/evaluations/${id}`);
  }

  addEvaluation(subjectData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/evaluations/create`, subjectData);
  }

  deleteEvaluation(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/evaluations/delete/${id}`);
  }
}