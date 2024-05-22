import { Component } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {
  volumeAtual!: number;

  receberVolume(volume: number) {
    this.volumeAtual = volume;
  }
}
