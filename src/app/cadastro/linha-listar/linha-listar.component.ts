import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Linha } from '../model/linha.model';
import { MatFormFieldControl } from '@angular/material/form-field';

@Component({
  selector: 'app-linha-listar',
  templateUrl: './linha-listar.component.html',
  styleUrls: ['./linha-listar.component.scss']
})
export class LinhaListarComponent implements OnInit {

  id = 0;
  codigoLinha = '';
  descricao = '';
  situacao = 1;

  itens: Linha[] = [];
  dataSource = new MatTableDataSource<Linha>(this.itens);
  displayedColumns: string[] = ['codigoLinha', 'descricao', 'situacao'];

  @ViewChild(MatPaginator) paginator :any = MatPaginator;
  @ViewChild(MatSort) sort:any = MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  addLineItem() {
    this.itens.push({
      id: this.id,
      codigoLinha: this.codigoLinha,
      descricao: this.descricao,
      situacao: this.situacao,
    });
    this.dataSource = new MatTableDataSource<Linha>(this.itens);
  }

}
