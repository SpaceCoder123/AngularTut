import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicformsComponent } from './basicforms.component';

describe('BasicformsComponent', () => {
  let component: BasicformsComponent;
  let fixture: ComponentFixture<BasicformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicformsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
