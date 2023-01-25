import { AccountGuard } from './components/account/account.guard';
import { ViewAppHomeComponent } from './views/view-app-home/view-app-home.component';
import { TemplateAppComponent } from './templates/template-app/template-app.component';
import { ViewAccountResetPasswordComponent } from './views/view-account-reset-password/view-account-reset-password.component';
import { ViewAccountForgotPasswordComponent } from './views/view-account-forgot-password/view-account-forgot-password.component';
import { ViewAccountCreateComponent } from './views/view-account-create/view-account-create.component';
import { TemplateAccountComponent } from './templates/template-account/template-account.component';
import { ViewAccountAuthComponent } from './views/view-account-auth/view-account-auth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TemplateAccountComponent,
    children: [
      {path: '', component: ViewAccountAuthComponent, data: {banner: 'bAuth.png'}},
      {path: 'create/account', component: ViewAccountCreateComponent, data: {banner: 'bCreate.png'}},
      {path: 'forgot/password', component: ViewAccountForgotPasswordComponent, data: {banner: 'bReset.png'}},
      {path: 'reset/password', component: ViewAccountResetPasswordComponent, data: {banner: 'bReset.png'}},
    ]
  },
  {
    path: 'app',
    component: TemplateAppComponent,
    children: [
      {path: '', component: ViewAppHomeComponent},
    ],
    canActivate: [AccountGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
