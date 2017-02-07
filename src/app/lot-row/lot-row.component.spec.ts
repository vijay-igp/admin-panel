/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LotRowComponent } from './lot-row.component';

describe('LotRowComponent', () => {
  let component: LotRowComponent;
  let fixture: ComponentFixture<LotRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
