import { Component, inject } from '@angular/core';
import { ArrayDestructuringService } from './services/array-destructuring.service';
import { ObjectDestructuringService } from './services/object-destructuring.service';

@Component({
  selector: 'app-destructuring',
  standalone: true,
  imports: [],
  templateUrl: './destructuring.component.html',
  styleUrl: './destructuring.component.css'
})
export class DestructuringComponent {
  private arrayDestructuringService = inject(ArrayDestructuringService);
  private objectDestructuringService = inject(ObjectDestructuringService);
}
