import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  private baseUrl = 'https://localhost:8000/api/'; 
  constructor(private http: HttpClient) { }

  getAllTModules(): Observable<any> {
    return this.http.get(`${this.baseUrl}/modules/views`);
  }

  getModuleById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/modules/${id}`);
  }

  addModule(moduleData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/modules/create`, moduleData);
  }

  deleteModule(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/modules/delete/${id}`);
  }
}