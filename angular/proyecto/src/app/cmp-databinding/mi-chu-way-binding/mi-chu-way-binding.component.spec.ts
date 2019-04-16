import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiChuWayBindingComponent } from './mi-chu-way-binding.component';

describe('MiChuWayBindingComponent', () => {
  let component: MiChuWayBindingComponent;
  let fixture: ComponentFixture<MiChuWayBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiChuWayBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiChuWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
