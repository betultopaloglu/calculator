import { Routes } from '@angular/router';
import { CalculateComponent } from './calculate/calculate.component';
export const routes: Routes = [
  { path: '', redirectTo: 'calculate', pathMatch: 'full' },
  {path:'calculate'}
];