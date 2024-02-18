import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityTypesComponent } from './utility-types.component';

describe('UtilityTypesComponent', () => {
  let component: UtilityTypesComponent;
  let fixture: ComponentFixture<UtilityTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilityTypesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UtilityTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
