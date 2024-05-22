import { Component } from '@angular/core';

@Component({
  selector: 'app-datapicker',
  templateUrl: './datapicker.component.html',
  styleUrl: './datapicker.component.css',
})
export class DatapickerComponent {
  minDate: Date;
  maxDate: Date;

  constructor() {
    this.minDate = new Date('05/21/2024');
    this.maxDate = new Date('05/25/2024');
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6; // Impede a seleção de sábados e domingos
  };
}
