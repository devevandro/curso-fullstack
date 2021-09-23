import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { TecnicoListComponent } from './components/tecnico/tecnico-list/tecnico-list.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardGuard } from './auth/auth-guard.guard';
import { TecnicoCreateComponent } from './components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoUpdateComponent } from './components/tecnico/tecnico-update/tecnico-update.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: NavComponent,
    canActivate: [AuthGuardGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'tecnicos',
        component: TecnicoListComponent,
      },
      {
        path: 'tecnicos/create',
        component: TecnicoCreateComponent,
      },
      {
        path: 'tecnicos/update/:id',
        component: TecnicoUpdateComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
