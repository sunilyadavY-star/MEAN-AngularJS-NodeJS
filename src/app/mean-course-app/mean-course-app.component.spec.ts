import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MEANCOURSEAppComponent } from './mean-course-app.component';

describe('MEANCOURSEAppComponent', () => {
  let component: MEANCOURSEAppComponent;
  let fixture: ComponentFixture<MEANCOURSEAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MEANCOURSEAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MEANCOURSEAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
