import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cartao-visita',
  templateUrl: './cartao-visita.component.html',
  styleUrl: './cartao-visita.component.css'
})
export class CartaoVisitaComponent {
  @Input() nome: string = '';
  @Input() cargo: string = '';
  @Input() empresa: string = '';
  @Input() telefone: string = '';
  @Input() email: string = '';
}
