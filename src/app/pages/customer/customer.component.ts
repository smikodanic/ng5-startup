import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../../ng/services/globals.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  loggedUser: any;

  constructor(private globalsService: GlobalsService) {
    this.loggedUser = globalsService.loggedUser;
  }

  ngOnInit() {
  }

}
