import { Injectable } from '@angular/core';
import { Linha } from '../model/linha.model';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LinhaService {

  private linhaUrl = 'api/linhas/';

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'No-Auth': 'True',
    }),
  };
  
  constructor(private http: HttpClient) { 
    console.log('Carregando o serviço de linha')
  }

  getLinhas(): Observable<Linha[]> {

    let reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
    /*
    return this.http.get(this.linhaUrl, { headers: reqHeader })
    .subscribe((resp: any) => {
      console.log(resp);
    }, err => {
      console.log(err);
    });
    */

    return this.http.get<Linha[]>(this.linhaUrl).pipe();
  }
}
