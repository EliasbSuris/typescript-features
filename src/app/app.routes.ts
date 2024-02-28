import { Routes } from '@angular/router';
import { DestructuringComponent } from './features/destructuring/destructuring.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'destructuring'
  },
  {
    path: 'destructuring',
    component:DestructuringComponent
  }
];
