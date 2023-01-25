import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccountInterceptor } from './components/account/account.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';





import { ViewAccountCreateComponent } from './views/view-account-create/view-account-create.component';
import { ViewAccountAuthComponent } from './views/view-account-auth/view-account-auth.component';
import { ViewAccountForgotPasswordComponent } from './views/view-account-forgot-password/view-account-forgot-password.component';
import { ViewAccountResetPasswordComponent } from './views/view-account-reset-password/view-account-reset-password.component';
import { TemplateAccountComponent } from './templates/template-account/template-account.component';
import { AuthAccountComponent } from './components/account/auth-account/auth-account.component';
import { CreateAccountComponent } from './components/account/create-account/create-account.component';
import { ForgotPasswordComponent } from './components/account/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/account/reset-password/reset-password.component';
import { TemplateAppComponent } from './templates/template-app/template-app.component';
import { ViewAppHomeComponent } from './views/view-app-home/view-app-home.component';
import { ManagerAccountsBoxComponent } from './components/account/manager-accounts-box/manager-accounts-box.component';
import { AuthAccountBoxComponent } from './components/account/auth-account-box/auth-account-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewAccountCreateComponent,
    ViewAccountAuthComponent,
    ViewAccountForgotPasswordComponent,
    ViewAccountResetPasswordComponent,
    TemplateAccountComponent,
    AuthAccountComponent,
    CreateAccountComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    TemplateAppComponent,
    ViewAppHomeComponent,
    ManagerAccountsBoxComponent,
    AuthAccountBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AccountInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
