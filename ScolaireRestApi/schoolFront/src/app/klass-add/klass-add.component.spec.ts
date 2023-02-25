import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlassAddComponent } from './klass-add.component';

describe('KlassAddComponent', () => {
  let component: KlassAddComponent;
  let fixture: ComponentFixture<KlassAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlassAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KlassAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
