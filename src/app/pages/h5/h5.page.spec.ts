import { ComponentFixture, TestBed } from '@angular/core/testing';
import { H5Page } from './h5.page';

describe('H5Page', () => {
  let component: H5Page;
  let fixture: ComponentFixture<H5Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(H5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
