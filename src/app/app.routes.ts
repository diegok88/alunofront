import { Routes } from '@angular/router';
import { ListagemComponent } from './alunos/listagem/listagem.component';
import { CadastroComponent } from './alunos/cadastro/cadastro.component';
import { EdicaoComponent } from './alunos/edicao/edicao.component';

export const routes: Routes = [
    { path: '', redirectTo: 'listagem', pathMatch: 'full'},
    { path: 'listagem', component: ListagemComponent},
    { path: 'cadastro', component: CadastroComponent},
    { path: 'edicao/:id', component: EdicaoComponent},
];
