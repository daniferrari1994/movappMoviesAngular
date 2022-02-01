import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMovieListComponent } from './adm-movie-list.component';

describe('AdmMovieListComponent', () => {
  let component: AdmMovieListComponent;
  let fixture: ComponentFixture<AdmMovieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmMovieListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
