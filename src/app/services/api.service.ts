import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl = 'https://localhost:7000/api';

  constructor(private http: HttpClient) {}

  getItens(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/ProdutoItem`);
  }

  getCategorias(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/Categorium`);
  }
}