import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveNgclassComponent } from './directive-ngclass.component';

describe('DirectiveNgclassComponent', () => {
  let component: DirectiveNgclassComponent;
  let fixture: ComponentFixture<DirectiveNgclassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveNgclassComponent]
    });
    fixture = TestBed.createComponent(DirectiveNgclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
