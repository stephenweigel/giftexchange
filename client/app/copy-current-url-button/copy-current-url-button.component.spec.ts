import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyCurrentUrlButtonComponent } from './copy-current-url-button.component';

describe('CopyCurrentUrlButtonComponent', () => {
  let component: CopyCurrentUrlButtonComponent;
  let fixture: ComponentFixture<CopyCurrentUrlButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyCurrentUrlButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyCurrentUrlButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
