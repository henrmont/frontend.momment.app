import { ActivatedRoute } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-view-account-create',
  templateUrl: './view-account-create.component.html',
  styleUrls: ['./view-account-create.component.css']
})
export class ViewAccountCreateComponent {

  @Output() bannerEvent: EventEmitter<string> = new EventEmitter()
  banner: string = this.arouter.snapshot.data['banner']

  constructor(
    private arouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.bannerEvent.emit(this.banner)
  }

}
