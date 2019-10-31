import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryContactComponent } from './enquiry-contact.component';

describe('EnquiryContactComponent', () => {
  let component: EnquiryContactComponent;
  let fixture: ComponentFixture<EnquiryContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnquiryContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquiryContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
