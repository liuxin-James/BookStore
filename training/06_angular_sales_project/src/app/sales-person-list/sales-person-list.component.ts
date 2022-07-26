import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Xin", "Liu", "xl9jv@sdas.com", 1213545),
    new SalesPerson("Xiao", "Lin", "xlsds@sdas.com", 7849587),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
