import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CartServiceMock } from 'src/app/services/cart.service.mock';
import { LoginService } from 'src/app/services/login.service';
import { LoginServiceMock } from 'src/app/services/login.service.mock';
import { UserService } from 'src/app/services/user.service';
import { UserServiceMock } from 'src/app/services/user.service.mock';

import { LoginComponent } from './login.component';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers:[
        {
          provide: LoginService,
          useValue: LoginServiceMock
        },
        {
          provide:Router,
          useValue:Router
        },
        {
          provide:UserService,
          useValue:UserServiceMock
        },
        {
          provide:CartService,
          useValue:CartServiceMock
        }
    ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should be login', () => {
    component.loginValidate()
    console.log(component.loginValidate());

    expect(component.login).toEqual(true);
  });

  it('should not be login', () => {
    component.loginValidate();
    expect(component.login).toEqual(false);
  });
});
