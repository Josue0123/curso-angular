/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExternoComponent } from './externo.component';

describe('ExternoComponent', () => {
  let component: ExternoComponent;
  let fixture: ComponentFixture<ExternoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});