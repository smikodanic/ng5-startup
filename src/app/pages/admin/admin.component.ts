import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../../ng/services/globals.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  loggedUser: any;

  constructor(private globalsService: GlobalsService) {
    this.loggedUser = globalsService.loggedUser;
  }

  ngOnInit() {
  }

}
