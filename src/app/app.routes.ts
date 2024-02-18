import { Routes } from '@angular/router';
import { UtilityTypesComponent } from './features/utility-types/utility-types.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'utility-types',
  },
  {
    path: 'utility-types',
    component: UtilityTypesComponent,
  },
];
