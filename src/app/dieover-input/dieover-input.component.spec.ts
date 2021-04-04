import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieoverInputComponent } from './dieover-input.component';

describe('DieoverInputComponent', () => {
  let component: DieoverInputComponent;
  let fixture: ComponentFixture<DieoverInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DieoverInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DieoverInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
