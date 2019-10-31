import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSideNavBarComponent } from './mat-side-nav-bar.component';

describe('MatSideNavBarComponent', () => {
  let component: MatSideNavBarComponent;
  let fixture: ComponentFixture<MatSideNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatSideNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatSideNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
