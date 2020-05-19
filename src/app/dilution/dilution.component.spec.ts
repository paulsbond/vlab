import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DilutionComponent } from './dilution.component';

describe('DilutionComponent', () => {
  let component: DilutionComponent;
  let fixture: ComponentFixture<DilutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DilutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DilutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});