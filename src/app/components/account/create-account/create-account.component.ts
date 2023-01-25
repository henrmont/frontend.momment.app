import { Router } from '@angular/router';
import { AccountService } from './../account.service';
import { CommonService } from './../../common.service';
import { Account } from './../account.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  cpassword: string = '';
  account: Account = {
    username: '',
    email: '',
    password: ''
  }

  constructor(
    private commonService: CommonService,
    private accountService: AccountService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.accountService.createAccount(this.account).subscribe(
      (response: any) => {
        if (response.status) {
          this.commonService.showMessage(response.message)
          this.router.navigate(['/'])
        }
      }
    )
  }

}
