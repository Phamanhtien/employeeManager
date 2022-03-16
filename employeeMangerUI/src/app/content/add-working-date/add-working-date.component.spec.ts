import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkingDateComponent } from './add-working-date.component';

describe('AddWorkingDateComponent', () => {
  let component: AddWorkingDateComponent;
  let fixture: ComponentFixture<AddWorkingDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWorkingDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWorkingDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
