import { Component, OnInit } from '@angular/core';

import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

  scrollToAnchor(anchor: string) {
    this.sharedService.scrollToAnchor(anchor);
  }

}
