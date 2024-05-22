import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrl: './imagem.component.css',
})
export class ImagemComponent {
  @Input() imageSrc: string = '';
  @Output() cliqueNaImage = new EventEmitter<void>()

  clickImagem(): void {
    this.cliqueNaImage.emit()
  }
}
