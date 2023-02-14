import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class ParametroAplicacaoService implements InMemoryDbService {

  constructor() { }

  linha = {
    id: null,
    codigoLinha: '',
    descricao: '',
    situacao: null,
  }

  createDb() {
    return {
      linhas: [
        {
          id: 1,
          codigoLinha: 'Linha 1',
          descricao: 'Descrição da linha 1',
          situacao: 1
        },
        {
          id: 2,
          codigoLinha: 'Linha 2',
          descricao: 'Descrição da linha 2',
          situacao: 0
        },
        {
          id: 3,
          codigoLinha: 'Linha 3',
          descricao: 'Descrição da linha 3',
          situacao: 0
        },
      ]
    };
  }

}
