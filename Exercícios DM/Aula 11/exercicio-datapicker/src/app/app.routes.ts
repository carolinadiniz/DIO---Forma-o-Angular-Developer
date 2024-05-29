import { Routes } from '@angular/router';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FormularioComponent } from './formulario/formulario.component';

export const routes: Routes = [
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'formulario', component: FormularioComponent },
];
