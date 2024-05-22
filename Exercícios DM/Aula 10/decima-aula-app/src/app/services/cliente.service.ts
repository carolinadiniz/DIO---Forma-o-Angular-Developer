// cliente.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private clientes: string[] = ['Cliente A', 'Cliente B'];
  private clientes$ = new BehaviorSubject<string[]>(this.clientes); // elo, é convenção colocar variável$ para Observables

  obterClientes(): Observable<string[]> {
    return this.clientes$.asObservable();
  }

  adicionarCliente(nome: string): void {
    this.clientes.push(nome);
    this.clientes$.next(this.clientes) // emite um evento para os observadores sobre as mudanças
  }
}
