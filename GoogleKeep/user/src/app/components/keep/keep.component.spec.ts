import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepComponent } from './keep.component';

describe('KeepComponent', () => {
  let component: KeepComponent;
  let fixture: ComponentFixture<KeepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeepComponent]
    });
    fixture = TestBed.createComponent(KeepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
