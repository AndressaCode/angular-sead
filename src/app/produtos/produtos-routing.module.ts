import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', // se estou na rota vazia, sem nenhum parametro, incovo o component de produtos
    component: ProdutosComponent,
  },
  {
    path: 'new',
    component: ProdutoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
