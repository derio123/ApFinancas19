import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLancarPage } from './add-lancar.page';

describe('AddLancarPage', () => {
  let component: AddLancarPage;
  let fixture: ComponentFixture<AddLancarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLancarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLancarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
