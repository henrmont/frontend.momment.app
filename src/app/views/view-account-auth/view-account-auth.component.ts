import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-account-auth',
  templateUrl: './view-account-auth.component.html',
  styleUrls: ['./view-account-auth.component.css']
})
export class ViewAccountAuthComponent {

  @Output() bannerEvent: EventEmitter<string> = new EventEmitter()
  banner: string = this.arouter.snapshot.data['banner']

  constructor(
    private arouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(this.banner)
    this.bannerEvent.emit(this.banner)
  }

}
