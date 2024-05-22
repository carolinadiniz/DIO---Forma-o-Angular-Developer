import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css',
})
export class GaleriaComponent {
  totalCliques = 0;

  imageSrcList: string[] = [
    '../../assets/image/photo (1).jpg',
    '../../assets/image/photo (2).jpg',
    '../../assets/image/photo (3).jpg',
    '../../assets/image/photo (4).jpg',
    '../../assets/image/photo (5).jpg',
    '../../assets/image/photo (6).jpg',
    '../../assets/image/photo (7).jpg',
    '../../assets/image/photo (8).jpg',
    '../../assets/image/photo (9).jpg',
  ];

  cliqueNaImagem() {
    this.totalCliques++;
  }
}
