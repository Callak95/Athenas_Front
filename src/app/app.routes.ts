import { Routes } from '@angular/router';
import { PessoaComponent } from './pessoa/pessoa.component';

export const appRoutes: Routes = [
  { path: '', component: PessoaComponent },
  { path: 'pessoa', component: PessoaComponent }
];