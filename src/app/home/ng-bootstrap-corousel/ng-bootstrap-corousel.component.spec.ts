import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBootstrapCorouselComponent } from './ng-bootstrap-corousel.component';

describe('NgBootstrapCorouselComponent', () => {
  let component: NgBootstrapCorouselComponent;
  let fixture: ComponentFixture<NgBootstrapCorouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBootstrapCorouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBootstrapCorouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
