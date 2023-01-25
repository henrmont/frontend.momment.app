import { AuthAccountBoxComponent } from './../auth-account-box/auth-account-box.component';
import { AuthAccountComponent } from './../auth-account/auth-account.component';
import { Router } from '@angular/router';
import { CommonService } from './../../common.service';
import { Account } from './../account.model';
import { AccountService } from './../account.service';
import { Component } from '@angular/core';
import { HttpHandler, HttpRequest } from '@angular/common/http';
import { catchError, map, Observable, switchMap, throwError } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-manager-accounts-box',
  templateUrl: './manager-accounts-box.component.html',
  styleUrls: ['./manager-accounts-box.component.css']
})
export class ManagerAccountsBoxComponent {

  actvAcc = JSON.parse(window.localStorage.getItem('actvAcc') || '{}')
  username: any

  constructor(
    private accountService: AccountService,
    public commonService: CommonService,
    private router: Router,
    private dialogRef: MatDialogRef<AuthAccountComponent>,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.accountService.getUserInfo().subscribe(
      (response: any) => {
        if (response.status) {
          this.username = response.data.username
        }
      }
    )
  }

  changeAccount(token: any, refreshToken: any): void {
    window.localStorage.setItem('token', token)
    window.localStorage.setItem('refreshToken', refreshToken)
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['app'])
    })
    this.dialogRef.close()
  }

  authAccount(): void {
    this.dialog.open(AuthAccountBoxComponent, {
      width: '400px',
      //disableClose: true
    });
    this.dialogRef.close()
  }

}
