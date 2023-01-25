import { CommonService } from './../../components/common.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-account',
  templateUrl: './template-account.component.html',
  styleUrls: ['./template-account.component.css']
})
export class TemplateAccountComponent {

  banner!: string

  constructor(
    public commonService: CommonService
  ) { }

  changeBanner(banner: string) {
    this.banner = banner
  }

}
