import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterludePage } from './interlude.page';

describe('InterludePage', () => {
  let component: InterludePage;
  let fixture: ComponentFixture<InterludePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InterludePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
