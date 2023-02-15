import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Linha } from '../model/linha.model';
import { LinhaService } from '../service/linha.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-linha-listar',
  templateUrl: './linha-listar.component.html',
  styleUrls: ['./linha-listar.component.scss']
})
export class LinhaListarComponent implements OnInit {

  linha = {
    id: 0,
    codigoLinha: '',
    descricao: '',
    situacao: 0,
  }

  //linhas: Linha[]
  linhas : Linha[] = [];

  dataSource = new MatTableDataSource<Linha>(this.linhas);
  displayedColumns: string[] = ['id', 'codigoLinha', 'descricao', 'situacao'];

  //@ViewChild(MatPaginator) paginator :any = MatPaginator;
  @ViewChild(MatSort) sort:any = MatSort;

  constructor(private linhaService: LinhaService) {
    console.log('Carregando o componente de linha')
  }

  ngOnInit() : void {
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
    this.getLista()
    this.dataSource = new MatTableDataSource<Linha>(this.linhas);

    console.log('Linha Component - ngOnInit() - Quantidade de registros:' + this.linhas)
  }

  /*
  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  */

  addLineItem() {

    //if(this.linhas == undefined)
    //  this.linhas = []

    this.linhas.push(this.linha);
    this.dataSource = new MatTableDataSource<Linha>(this.linhas);
    console.log('Linha Component - addLineItem: ', this.linhas)
  }

  private getLista() {
    console.log('Linha Component - getLista()')
    this.linhaService.getLinhas().subscribe(linhas => this.linhas = linhas);

    //this.dataSource = new MatTableDataSource<Linha>(this.linhas);
  }

}
