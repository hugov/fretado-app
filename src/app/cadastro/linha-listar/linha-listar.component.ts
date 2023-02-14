import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Linha } from '../model/linha.model';
import { LinhaService } from '../service/linha.service';

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

  linhas!: Linha[];

  //itens: Linha[] = [];
  dataSource = new MatTableDataSource<Linha>(this.linhas);
  displayedColumns: string[] = ['id', 'codigoLinha', 'descricao', 'situacao'];

  //@ViewChild(MatPaginator) paginator :any = MatPaginator;
  @ViewChild(MatSort) sort:any = MatSort;

  constructor(private linhaService: LinhaService) {
    console.log('Carregando o componente de linha')
  }

  ngOnInit() : void {
    //this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getLista()
  }

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  addLineItem() {
    this.linhas.push(this.linha);
    this.dataSource = new MatTableDataSource<Linha>(this.linhas);
  }

  private getLista() {
    this.linhaService.getLinhas().subscribe(p => this.linhas = p);

    console.log('Linhas:', this.linhas)

    this.dataSource = new MatTableDataSource<Linha>(this.linhas);
  }

}
