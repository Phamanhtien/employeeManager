import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkingAdvanceComponent } from './add-working-advance.component';

describe('AddWorkingAdvanceComponent', () => {
  let component: AddWorkingAdvanceComponent;
  let fixture: ComponentFixture<AddWorkingAdvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWorkingAdvanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWorkingAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
