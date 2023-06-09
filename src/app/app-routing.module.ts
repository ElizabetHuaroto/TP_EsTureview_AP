import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColegioComponent } from './components/colegio/colegio.component';
import { RegistroColegioComponent } from './components/colegio/registro-colegio/registro-colegio.component';
import { UserComponent } from './components/user/user.component';
import { CreateEditComponent } from './components/user/create-edit/create-edit.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileSchoolComponent } from './components/colegio/profile-school/profile-school.component';
import { GetInComponent } from './components/get-in/get-in.component';
import { GetOutComponent } from './components/get-out/get-out.component';
import { SearchComponent } from './components/search/search.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { ListTeacherComponent } from './components/teacher/list-teacher/list-teacher.component';
import { ProfileTeacherComponent } from './components/teacher/profile-teacher/profile-teacher.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'registro',
    component: CreateEditComponent //prueba
  },
  {
    path: 'ingreso',
    component: GetInComponent
  },
  {
    path: 'colegios/:id',
    component: ProfileSchoolComponent
  },
  {
    path: 'search/:text',
    component: SearchComponent
  },
  {
    path: 'users/:id',
    component: UserProfileComponent
  },
  {
    path: 'teachers',
    component: ListTeacherComponent
  },
  {
    path: 'teachers/:id',
    component: ProfileTeacherComponent
  },
  {
    path: 'colegios',
    component: ColegioComponent,
    children: [
      {
        path: 'nuevo', component: RegistroColegioComponent
      },
      {
        path: 'edicion/:id', component: RegistroColegioComponent
      }
    ],
  },
  {
    path: 'users',
    component: UserComponent,
    children: [
      {
        path:'nuevo', component:CreateEditComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
