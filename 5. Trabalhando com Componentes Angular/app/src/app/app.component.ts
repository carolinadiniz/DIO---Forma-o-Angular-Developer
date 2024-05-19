import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app';
  name: string = 'Angular' + VERSION.major;
  buttonLabel: string = 'Carrinho';
  buttonSecond: string = 'Adicionar aos favoritos'
}
