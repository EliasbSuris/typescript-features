import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestructuringComponent } from './destructuring.component';

describe('DestructuringComponent', () => {
  let component: DestructuringComponent;
  let fixture: ComponentFixture<DestructuringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestructuringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DestructuringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
