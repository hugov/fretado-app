import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinhaListarComponent } from './linha-listar/linha-listar.component';
import { MotoristaListarComponent } from './motorista-listar/motorista-listar.component';



@NgModule({
  declarations: [
    LinhaListarComponent,
    MotoristaListarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CadastroModule { }
