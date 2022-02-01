import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { userToDisplay } from 'src/app/models/userdisplay.model';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { userDiplay } from 'src/app/store/menu-user.actions';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy, AfterViewInit {

  login: boolean = false;
  userLogedIn : userToDisplay | any ;
  userDisplay: string ="";

  constructor(
    private loginService: LoginService,
    private userService : UserService,
    private cartService : CartService,
    private router :Router,
    private store: Store
  ){ }

  ngOnInit(): void {
    console.log("Login On Init - Status OK");
    this.userService.getUsers().subscribe(response => console.table(response));
  }

  ngAfterViewInit(): void {
    console.log("Login After View Init - Status OK");
    const lastElement: any = document.querySelector('.inputs');
    lastElement?.scrollIntoView();
  }

  ngOnDestroy(): void {
    console.log("Login On Destroy - Status OK");
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  emailControl = this.loginForm.controls['email'];
  passwordControl = this.loginForm.controls['password'];

  loginValidate() {

    this.loginService.validateCredentials(this.emailControl.value, this.passwordControl.value )
    .subscribe(valid => {

      if (valid) {
        this.login = true;
        Swal.fire("Welcome ", this.loginService.getUserName(), "success");

        this.userLogedIn= this.loginService.getUserInfo();
        this.userDisplay = this.userLogedIn.nombre + " "+ this.userLogedIn.apellido
        this.store.dispatch(userDiplay ({username: this.userDisplay, role: this.userLogedIn.role}))
        this.router.navigate(['cartelera']);

      } else {
        this.login = false;
        Swal.fire("ERROR", "El email o password son incorecctos", "error");
      }
    });
  }
}



