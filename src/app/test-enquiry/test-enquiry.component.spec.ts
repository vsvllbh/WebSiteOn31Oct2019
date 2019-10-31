import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEnquiryComponent } from './test-enquiry.component';

describe('TestEnquiryComponent', () => {
  let component: TestEnquiryComponent;
  let fixture: ComponentFixture<TestEnquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestEnquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
