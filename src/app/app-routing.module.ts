import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProdutosModule } from "./produtos/produtos.module";

const routes: Routes = [
  {
    path: 'produtos',
    // component: ProdutosModule,
    loadChildren: () => import('./produtos/produtos.module').then(prod => prod.ProdutosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
