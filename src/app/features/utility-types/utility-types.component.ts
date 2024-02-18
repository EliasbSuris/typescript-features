import { Component, inject } from '@angular/core';
import { PartialTypeService } from './partial-type/partial-type.service';
import { RequiredTypeService } from './required-type/required-type.service';

@Component({
  selector: 'app-utility-types',
  standalone: true,
  imports: [],
  templateUrl: './utility-types.component.html',
  styleUrl: './utility-types.component.css',
})
export class UtilityTypesComponent {
  partialTypeService = inject(PartialTypeService);
  requiredTypeService = inject(RequiredTypeService);
}
