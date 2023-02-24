import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlassDetailComponent } from './klass-detail.component';

describe('KlassDetailComponent', () => {
  let component: KlassDetailComponent;
  let fixture: ComponentFixture<KlassDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlassDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KlassDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
