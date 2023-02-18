import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsAlumnoComponent } from './cards-alumno.component';

describe('CardsAlumnoComponent', () => {
  let component: CardsAlumnoComponent;
  let fixture: ComponentFixture<CardsAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsAlumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
