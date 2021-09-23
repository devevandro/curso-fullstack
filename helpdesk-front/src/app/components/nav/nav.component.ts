import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.router.navigate(['home']);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['login']);
    this.toastr.info('Logout realizado com sucesso!', 'Logout', { timeOut: 7000 });
  }
}
