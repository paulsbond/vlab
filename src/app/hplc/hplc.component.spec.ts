import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HplcComponent } from './hplc.component';

describe('HplcComponent', () => {
  let component: HplcComponent;
  let fixture: ComponentFixture<HplcComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HplcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HplcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
