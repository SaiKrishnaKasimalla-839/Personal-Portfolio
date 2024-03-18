import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalbadgesComponent } from './digitalbadges.component';

describe('DigitalbadgesComponent', () => {
  let component: DigitalbadgesComponent;
  let fixture: ComponentFixture<DigitalbadgesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitalbadgesComponent]
    });
    fixture = TestBed.createComponent(DigitalbadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
