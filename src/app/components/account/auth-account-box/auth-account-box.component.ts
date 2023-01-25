import { MatDialogRef } from '@angular/material/dialog';
import { Account } from './../account.model';
import { Component } from '@angular/core';
import { CommonService } from '../../common.service';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-account-box',
  templateUrl: './auth-account-box.component.html',
  styleUrls: ['./auth-account-box.component.css']
})
export class AuthAccountBoxComponent {

  actvAcc: any[] = []

  account: Account = {
    username: '',
    password: ''
  }

  constructor(
    private commonService: CommonService,
    private accountService: AccountService,
    private router: Router,
    private dialogRef: MatDialogRef<AuthAccountBoxComponent>
  ) {}

  ngOnInit(): void {
    if(window.localStorage.getItem('actvAcc')) {
      this.actvAcc = JSON.parse(window.localStorage.getItem('actvAcc') || '{}');
    }
  }

  onSubmit(): void {
    this.accountService.login(this.account).subscribe(
      (response: any) => {
        this.accountService.getValidUser(this.account).subscribe(
          (user: any) => {
            if (user.status) {
              window.localStorage.setItem('token', response.token)
              window.localStorage.setItem('refreshToken', response.refresh_token)
              this.actvAcc.push([user.data.username,user.data.email,user.data.email,response.token,response.refresh_token])
              window.localStorage.setItem('actvAcc', JSON.stringify(this.actvAcc))
              this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
                this.router.navigate(['app'])
              })
              this.dialogRef.close()
            } else {
              this.commonService.showMessage(user.message)
            }
          }
        )
      },
      (err) => {
        this.commonService.showMessage('Credenciais inválida')
      }
    )
  }

}
