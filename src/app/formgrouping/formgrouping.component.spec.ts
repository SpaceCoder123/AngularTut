import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormgroupingComponent } from './formgrouping.component';

describe('FormgroupingComponent', () => {
  let component: FormgroupingComponent;
  let fixture: ComponentFixture<FormgroupingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormgroupingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormgroupingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
