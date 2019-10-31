import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniThoughtsComponent } from './alumni-thoughts.component';

describe('AlumniThoughtsComponent', () => {
  let component: AlumniThoughtsComponent;
  let fixture: ComponentFixture<AlumniThoughtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumniThoughtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniThoughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
