import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatedriveformsComponent } from './templatedriveforms.component';

describe('TemplatedriveformsComponent', () => {
  let component: TemplatedriveformsComponent;
  let fixture: ComponentFixture<TemplatedriveformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplatedriveformsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatedriveformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
