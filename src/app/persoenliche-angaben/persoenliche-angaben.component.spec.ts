import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PersoenlicheAngabenComponent} from './persoenliche-angaben.component';

describe('PersoenlicheAngabenComponent', () => {
  let component: PersoenlicheAngabenComponent;
  let fixture: ComponentFixture<PersoenlicheAngabenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersoenlicheAngabenComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoenlicheAngabenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
