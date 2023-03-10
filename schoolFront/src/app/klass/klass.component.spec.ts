import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlassComponent } from './klass.component';

describe('KlassComponent', () => {
  let component: KlassComponent;
  let fixture: ComponentFixture<KlassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
