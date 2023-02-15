import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Linha } from '../model/linha.model';
import { LinhaService } from '../service/linha.service';

@Component({
  selector: 'app-linha-listar',
  templateUrl: './linha-listar.component.html',
  styleUrls: ['./linha-listar.component.scss']
})
export class LinhaListarComponent implements AfterViewInit, OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: any = MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: any = MatSort;
  @ViewChild(MatTable, { static: false }) table: any = MatTable<Linha>;
  
  linha = {
    id: 0,
    codigoLinha: '',
    descricao: '',
    situacao: 0,
  }
  
  linhas : Linha[] = [];
  
  dataSource = new MatTableDataSource<Linha>(this.linhas);
  displayedColumns: string[] = ['id', 'codigoLinha', 'descricao', 'situacao'];

  constructor(private linhaService: LinhaService) {
    console.log('Carregando o componente de linha')
  }

  ngOnInit() : void {
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
    this.dataSource = new MatTableDataSource<Linha>(this.linhas);
    this.getLista()

    console.log('Linha Component - ngOnInit() - Quantidade de registros:' + this.linhas)
  }

  ngAfterViewInit() {
    //this.table.dataSource = this.dataSource;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  addLineItem() {
    console.log('Linha Component - addLineItem: ', this.linhas)
    this.linhas.push(this.linha);
    this.dataSource = new MatTableDataSource<Linha>(this.linhas);
  }

  onRowClicked(row : Linha) {
    console.log('Row clicked: ', row);
  }

  private getLista() {
    console.log('Linha Component - getLista()')

    this.linhaService.getLinhas().subscribe((linhas: Linha[]) => {
      this.linhas = linhas
      this.dataSource.data = linhas
      console.table(linhas)
      return linhas
    })
  }

}
