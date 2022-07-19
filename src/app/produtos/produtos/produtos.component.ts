import { catchError, Observable, of } from 'rxjs';
import { Produto } from './../model/produto';
import { ProdutosService } from './../service/produtos.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  produtos_array: Produto[] = [];
  produtos_observable: Observable<Produto[]>;

  displayedColumns = ['nome', 'descricao', 'acoes'];

  constructor(
    private produtosService: ProdutosService,
    private snackBar: MatSnackBar
  ) {
    produtosService.list().subscribe((dados) => (this.produtos_array = dados));
    this.produtos_observable = produtosService.list().pipe(
      catchError((error) => {
        console.log('Um erro ocorreu');
        this.onError(error.message, 2000);
        return of([]);
      })
    );
  }

  ngOnInit(): void {}

  onError(msg: string, duracao: number) {
    this.snackBar.open(msg, 'Olá, snackbar!', {
      duration: duracao,
    });
  }

  onEdit() {
    console.log('Edited');
  }

  onDelete() {
    console.log('Deleted');
  }
}
