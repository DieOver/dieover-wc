import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieoverButtonComponent } from './dieover-button.component';

describe('DieoverButtonComponent', () => {
  let component: DieoverButtonComponent;
  let fixture: ComponentFixture<DieoverButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DieoverButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DieoverButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
