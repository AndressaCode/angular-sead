import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, first, Observable, tap } from 'rxjs';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {

  private API_URL = "http://localhost:8080/produtos";

  constructor(private httpClient: HttpClient) {}

  list():Observable<Produto[]>{
    return this.httpClient.get<Produto[]>(this.API_URL)
       .pipe(
        delay(500),
         first(),
         tap( p => console.log(p))
       )
   }

  listById() {}

  create() {}

  delete() {}

  edit() {}
}
