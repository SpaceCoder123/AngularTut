import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonnavigateComponent } from './buttonnavigate.component';

describe('ButtonnavigateComponent', () => {
  let component: ButtonnavigateComponent;
  let fixture: ComponentFixture<ButtonnavigateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonnavigateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonnavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
