import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConductivityComponent } from './conductivity.component';

describe('ConductivityComponent', () => {
  let component: ConductivityComponent;
  let fixture: ComponentFixture<ConductivityComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConductivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
