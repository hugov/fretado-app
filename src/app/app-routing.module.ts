import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LinhaListarComponent } from './cadastro/linha-listar/linha-listar.component';
import { MotoristaListarComponent } from './cadastro/motorista-listar/motorista-listar.component';
import { AplicacaoComponent } from './parametro/aplicacao/aplicacao.component';
import { LinhasCadastradasComponent } from './relatorio/linhas-cadastradas/linhas-cadastradas.component';
import { MotoristasCadastradosComponent } from './relatorio/motoristas-cadastrados/motoristas-cadastrados.component';

const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cadastro/linha', component: LinhaListarComponent },
  { path: 'cadastro/motorista', component: MotoristaListarComponent },
  { path: 'parametro/aplicacao', component: AplicacaoComponent },
  { path: 'relatorio/linhas-cadastradas', component: LinhasCadastradasComponent },
  { path: 'relatorio/motoristas-cadastrados', component: MotoristasCadastradosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
