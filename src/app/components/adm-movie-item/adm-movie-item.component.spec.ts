import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMovieItemComponent } from './adm-movie-item.component';

describe('AdmMovieItemComponent', () => {
  let component: AdmMovieItemComponent;
  let fixture: ComponentFixture<AdmMovieItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmMovieItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmMovieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
