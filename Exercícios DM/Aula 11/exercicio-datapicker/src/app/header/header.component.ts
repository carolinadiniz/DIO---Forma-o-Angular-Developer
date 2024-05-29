import { Component } from '@angular/core';
import { FormularioComponent } from '../formulario/formulario.component';
import { DatepickerComponent } from '../datepicker/datepicker.component';

import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, FormularioComponent, DatepickerComponent, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
