import { ActivatedRoute } from '@angular/router';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-view-account-reset-password',
  templateUrl: './view-account-reset-password.component.html',
  styleUrls: ['./view-account-reset-password.component.css']
})
export class ViewAccountResetPasswordComponent {

  @Output() bannerEvent: EventEmitter<string> = new EventEmitter()
  banner: string = this.arouter.snapshot.data['banner']

  constructor(
    private arouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.bannerEvent.emit(this.banner)
  }

}
