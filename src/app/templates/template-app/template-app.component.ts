import { CommonService } from './../../components/common.service';
import { ManagerAccountsBoxComponent } from './../../components/account/manager-accounts-box/manager-accounts-box.component';
import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';


@Component({
  selector: 'app-template-app',
  templateUrl: './template-app.component.html',
  styleUrls: ['./template-app.component.css'],
})
export class TemplateAppComponent {

  showFiller: boolean = true;

  constructor(
    private dialog: MatDialog,
    public commonService: CommonService
  ) { }

  managerAccounts(): void {
    this.dialog.open(ManagerAccountsBoxComponent, {
      width: '400px',
      //disableClose: true
    });
  }

}
