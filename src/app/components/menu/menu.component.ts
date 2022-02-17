import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of, tap } from 'rxjs';
import { userToDisplay } from 'src/app/models/userdisplay.model';
import { userState } from 'src/app/store/user-state.model';
import { userDisplaySelector } from 'src/app/store/menu-user.selectors';
import { CartService } from 'src/app/services/cart.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { userClear, userDiplay } from 'src/app/store/menu-user.actions';
import { cartClear } from 'src/app/features/cart/store/cart.actions';


@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuNavComponent implements OnInit {

  user: userToDisplay = {
    email: "",
    apellido: "",
    nombre: "",
    role: "",
    token: ""
  }
  state$: Observable<userState> = of({username: "", role: ""});
  username: string ="";
  role: string ="";

  constructor(
    private store: Store,
    private loginService: LoginService,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.state$ = this.store.pipe(
      select(userDisplaySelector)
    );

    this.state$.subscribe(state => this.username = state.username);
    this.state$.subscribe(state => this.role = state.role);
  };

  signOut() {

    Swal.fire({
      title: 'ATENCION',
      text: "Estas por cerrar tu sesion y perderas todas las operaciones efectuadas sin guardar",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Cerrar Sesion'

    }).then((result) => {
      if (result.value) {
        this.cartService.clearCart().subscribe(response => {
          console.log(response)
        });
        this.store.dispatch(cartClear());
        this.loginService.signOutUser();
        this.store.dispatch(userClear());

        Swal.fire(
          'Tu sesion ha sido cerrada',
          'success'
        )
        this.router.navigate(['login']);
      }
    })
  }
}

