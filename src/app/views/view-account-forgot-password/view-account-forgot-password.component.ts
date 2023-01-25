import { ActivatedRoute } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-view-account-forgot-password',
  templateUrl: './view-account-forgot-password.component.html',
  styleUrls: ['./view-account-forgot-password.component.css']
})
export class ViewAccountForgotPasswordComponent {

  @Output() bannerEvent: EventEmitter<string> = new EventEmitter()
  banner: string = this.arouter.snapshot.data['banner']

  constructor(
    private arouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.bannerEvent.emit(this.banner)
  }

}
