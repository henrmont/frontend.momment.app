import { Account } from './../../components/account/account.model';
import { ManagerAccountsBoxComponent } from './../../components/account/manager-accounts-box/manager-accounts-box.component';
import { AccountService } from './../../components/account/account.service';
import { CommonService } from './../../components/common.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-view-app-home',
  templateUrl: './view-app-home.component.html',
  styleUrls: ['./view-app-home.component.css']
})
export class ViewAppHomeComponent {

  user: Account = {
    username: ''
  }

  constructor(
    public commonService: CommonService,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.accountService.getUserInfo().subscribe(
      (response: any) => {
        this.user.username = response.data.username
      }
    )
  }

}
