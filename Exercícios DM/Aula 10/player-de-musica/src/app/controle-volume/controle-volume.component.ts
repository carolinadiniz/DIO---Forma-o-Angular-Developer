import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-controle-volume',
  templateUrl: './controle-volume.component.html',
  styleUrl: './controle-volume.component.css',
})
export class ControleVolumeComponent {
  volume: number = 50;
  @Output() volumeAlterado = new EventEmitter<number>()

  atualizarVolume($event: any) {
    if (this.volume < 0) this.volume = 0;
    if (this.volume > 100) this.volume = 100;
    this.volumeAlterado.emit(this.volume)
  }
}
