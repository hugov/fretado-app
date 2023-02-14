import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Linha } from '../model/linha.model';
import { MatFormFieldControl } from '@angular/material/form-field';
import { LinhaService } from '../service/linha.service';

@Component({
  selector: 'app-linha-listar',
  templateUrl: './linha-listar.component.html',
  styleUrls: ['./linha-listar.component.scss']
})
export class LinhaListarComponent implements AfterViewInit {

  linha = {
    id: null,
    codigoLinha: '',
    descricao: '',
    situacao: null,
  }

  linhas!: Linha[];

  itens: Linha[] = [];
  dataSource = new MatTableDataSource<Linha>(this.itens);
  displayedColumns: string[] = ['id', 'codigoLinha', 'descricao', 'situacao'];

  @ViewChild(MatPaginator) paginator :any = MatPaginator;
  @ViewChild(MatSort) sort:any = MatSort;

  constructor(private linhaService: LinhaService) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getLista()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /*
  addLineItem() {
    this.itens.push({
      id: this.id,
      codigoLinha: this.codigoLinha,
      descricao: this.descricao,
      situacao: this.situacao,
    });
    this.dataSource = new MatTableDataSource<Linha>(this.itens);
  }
  */

  private getLista() {
    this.linhaService.getLinhas().subscribe(linhas => this.linhas = linhas);
    this.dataSource = new MatTableDataSource<Linha>(this.linhas);
  }

}
