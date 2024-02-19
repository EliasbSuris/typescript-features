import { Component, inject } from '@angular/core';
import { PartialTypeService } from './partial-type/partial-type.service';
import { RequiredTypeService } from './required-type/required-type.service';
import { InterfacesExampleService } from './interfaces-example/interfaces-example.service';
import { TypesExampleService } from './types-example/types-example.service';
import { RecordTypeService } from './record-type/record-type.service';
import { PickTypeService } from './pick-type/pick-type.service';
import { OmitTypeService } from './omit-type/omit-type.service';
import { ReadonlyTypeService } from './readonly-type/readonly-type.service';



@Component({
  selector: 'app-utility-types',
  standalone: true,
  imports: [],
  templateUrl: './utility-types.component.html',
  styleUrl: './utility-types.component.css',
})
export class UtilityTypesComponent {
  interfacesService = inject(InterfacesExampleService);
  typesService = inject(TypesExampleService);
  partialTypeService = inject(PartialTypeService);
  requiredTypeService = inject(RequiredTypeService);
  readonlyTypeService = inject(ReadonlyTypeService);
  recordTypeService = inject(RecordTypeService);
  pickTypeService = inject(PickTypeService);
  omitTypeService = inject(OmitTypeService);
}
