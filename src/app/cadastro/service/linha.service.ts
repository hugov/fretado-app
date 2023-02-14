import { Injectable } from '@angular/core';
import { Linha } from '../model/linha.model';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LinhaService {

  private linhaUrl = 'api/linhas/';
  
  constructor(private http: HttpClient) { 
    console.log('Carregando o serviço de linha')
  }

  getLinhas(): Observable<Linha[]> {
    return this.http.get<Linha[]>(this.linhaUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}
