import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveNgcontentComponent } from './directive-ngcontent.component';

describe('DirectiveNgcontentComponent', () => {
  let component: DirectiveNgcontentComponent;
  let fixture: ComponentFixture<DirectiveNgcontentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveNgcontentComponent]
    });
    fixture = TestBed.createComponent(DirectiveNgcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
