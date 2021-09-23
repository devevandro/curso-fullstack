import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { Credenciais } from 'src/app/models/credentiais';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  creds: Credenciais = {
    email: '',
    senha: '',
  };

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  logar(): void {
    this.authService.authenticate(this.creds).subscribe(resposta => {
      // token
      this.toastr.info(resposta.headers.get('Authorization'));
      this.authService.successFullLogin(resposta.headers.get('Authorization').substring(7));
      this.router.navigate(['']);
    }, () => {
      this.toastr.error('Usuário e/ou senha inválidos!', 'Login');
    });
  }

  validaCampos(): boolean {
    return this.email.valid && this.senha.valid;
  }
}
