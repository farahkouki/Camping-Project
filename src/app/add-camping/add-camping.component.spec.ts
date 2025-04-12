import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCampingComponent } from './add-camping.component';

describe('AddCampingComponent', () => {
  let component: AddCampingComponent;
  let fixture: ComponentFixture<AddCampingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCampingComponent]
    });
    fixture = TestBed.createComponent(AddCampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
