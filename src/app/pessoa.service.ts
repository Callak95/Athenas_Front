import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pessoa } from './pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private apiUrl = 'http://127.0.0.1:8000/api/pessoas/';

  constructor(private http: HttpClient) {}

  getPessoas(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.apiUrl);
  }

  addPessoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.apiUrl, pessoa).pipe(
      catchError(this.handleError)
    );
  }

  updatePessoa(pessoa: Pessoa): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}${pessoa.id}/`, pessoa).pipe(
      catchError(this.handleError)
    );
  }

  deletePessoa(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Erro desconhecido';
    if (error.error instanceof ErrorEvent) {
      // Erro do lado do cliente
      errorMessage = `Erro: ${error.error.message}`;
    } else {
      // Erro do lado do servidor
      if (error.status === 400 && error.error.error === 'Pessoa já existe.') {
        errorMessage = 'Pessoa já existe.';
      } else {
        errorMessage = `Código do erro: ${error.status}\nMensagem: ${error.message}`;
      }
    }
    return throwError(errorMessage);
  }
}