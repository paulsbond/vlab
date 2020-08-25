import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UvvisComponent } from './uvvis.component';

describe('UvvisComponent', () => {
  let component: UvvisComponent;
  let fixture: ComponentFixture<UvvisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UvvisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UvvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
