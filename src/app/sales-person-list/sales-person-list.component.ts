import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  standalone: false,
  
  templateUrl: './sales-person-list.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Florin", "Mazilu", "maziluflorin84@outlook.com", 5000),
    new SalesPerson("Miruna", "Mazilu", "miruna2312@gmail.com", 4000),
    new SalesPerson("John", "Doe", "johndoe@gmail.com", 3000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
