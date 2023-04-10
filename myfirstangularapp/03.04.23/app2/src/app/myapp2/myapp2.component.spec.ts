import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myapp2Component } from './myapp2.component';

describe('Myapp2Component', () => {
  let component: Myapp2Component;
  let fixture: ComponentFixture<Myapp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myapp2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Myapp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
