import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleCheckboxesComponent } from './multiple-checkboxes.component';

describe('MultipleCheckboxesComponent', () => {
  let component: MultipleCheckboxesComponent;
  let fixture: ComponentFixture<MultipleCheckboxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleCheckboxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
