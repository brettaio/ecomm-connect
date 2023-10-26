import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallNowButtonComponent } from './call-now-button.component';

describe('CallNowButtonComponent', () => {
  let component: CallNowButtonComponent;
  let fixture: ComponentFixture<CallNowButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallNowButtonComponent]
    });
    fixture = TestBed.createComponent(CallNowButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
