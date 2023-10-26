import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroButtonsComponent } from './hero-buttons.component';

describe('HeroButtonsComponent', () => {
  let component: HeroButtonsComponent;
  let fixture: ComponentFixture<HeroButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroButtonsComponent]
    });
    fixture = TestBed.createComponent(HeroButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
