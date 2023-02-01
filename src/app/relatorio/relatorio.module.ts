import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinhasCadastradasComponent } from './linhas-cadastradas/linhas-cadastradas.component';
import { MotoristasCadastradosComponent } from './motoristas-cadastrados/motoristas-cadastrados.component';


@NgModule({
  declarations: [
    LinhasCadastradasComponent,
    MotoristasCadastradosComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class RelatorioModule { }
