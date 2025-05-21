import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from './aluno.model';

@Injectable({
  providedIn: 'root',
})
export class AlunosService {
  private apiURL = 'http://localhost:3000/aluno';

  constructor(private http: HttpClient) { }

  listarAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.apiURL);
  }

  cadastrarAlunos(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.apiURL, aluno);
  }

  buscarAlunos(id: string): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.apiURL}/${id}`);
  }

  atualizarAlunos(id: string, aluno: Aluno): Observable<Aluno> {
    return this.http.patch<Aluno>(`${this.apiURL}/${id}`, aluno);
  }

  deletarAlunos(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}
