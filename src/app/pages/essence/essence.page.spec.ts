import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EssencePage } from './essence.page';

describe('EssencePage', () => {
  let component: EssencePage;
  let fixture: ComponentFixture<EssencePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EssencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
