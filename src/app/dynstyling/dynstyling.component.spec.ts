import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynstylingComponent } from './dynstyling.component';

describe('DynstylingComponent', () => {
  let component: DynstylingComponent;
  let fixture: ComponentFixture<DynstylingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynstylingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynstylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
