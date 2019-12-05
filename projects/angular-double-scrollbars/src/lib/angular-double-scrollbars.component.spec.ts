import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDoubleScrollbarsComponent } from './angular-double-scrollbars.component';

describe('AngularDoubleScrollbarsComponent', () => {
  let component: AngularDoubleScrollbarsComponent;
  let fixture: ComponentFixture<AngularDoubleScrollbarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularDoubleScrollbarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDoubleScrollbarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
