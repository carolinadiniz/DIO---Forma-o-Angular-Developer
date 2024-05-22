// component pai (marketing.component.ts)
import { Component } from '@angular/core';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrl: './marketing.component.css',
})
export class MarketingComponent {
  produto = { nome: 'Smartphone XYZ' };
  totalVendas:number = 0;

  receberRelatorio(vendas: number) {
    this.totalVendas= vendas;
    alert(this.totalVendas)
  }
}
