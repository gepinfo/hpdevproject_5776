import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { ManagerolesComponent } from './manageroles/manageroles.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { UserComponent } from './user/user.component';
import { ProfilesettingsComponent } from './user/profilesettings/profilesettings.component';
import { TemplateComponent } from './template/template.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'authorization', component: AuthorizationComponent, canActivate: [AuthGuard] },
{ path: 'manageroles', component: ManagerolesComponent, canActivate: [AuthGuard] },
{ path: 'manageusers', component: ManageusersComponent, canActivate: [AuthGuard] },
{ path: 'usermanagement', component: UserComponent, canActivate: [AuthGuard] },
{ path: 'profile', component: ProfilesettingsComponent, canActivate: [AuthGuard] },
       { path: '', component: TemplateComponent, pathMatch: 'full'   } ,
{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },

{ path : 'createstudent', loadChildren: () => import('./createstudent/createstudent.module').then(m => m.CreatestudentModule), canActivate: [AuthGuard] } , 
{ path : 'getallstudent', loadChildren: () => import('./getallstudent/getallstudent.module').then(m => m.GetallstudentModule), canActivate: [AuthGuard] } , 
{ path : 'createdepartment', loadChildren: () => import('./createdepartment/createdepartment.module').then(m => m.CreatedepartmentModule), canActivate: [AuthGuard] } , 
{ path : 'createcollege', loadChildren: () => import('./createcollege/createcollege.module').then(m => m.CreatecollegeModule), canActivate: [AuthGuard] } , 
{ path : 'createplace', loadChildren: () => import('./createplace/createplace.module').then(m => m.CreateplaceModule), canActivate: [AuthGuard] } , 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
