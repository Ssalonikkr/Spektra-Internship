import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtableComponent } from './protable.component';

describe('ProtableComponent', () => {
  let component: ProtableComponent;
  let fixture: ComponentFixture<ProtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
