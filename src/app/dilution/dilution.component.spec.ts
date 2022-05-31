import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DilutionComponent } from './dilution.component';

describe('DilutionComponent', () => {
  let component: DilutionComponent;
  let fixture: ComponentFixture<DilutionComponent>;

  beforeEach(waitForAsync(() => {
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
