import { FormControl, FormGroup } from '@angular/forms';
import { Sales } from 'src/app/core/models/sales/sales';
import { SalesService } from 'src/app/core/services/sales/sales.service';import { Component } from '@angular/core';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.scss']
})
export class SalesListComponent {

  sales: Sales[] = [];

  constructor(private salesService: SalesService) { }

  ngOnInit(): void {
    this.listSales();
  }

  public listSales(): void {
    this.salesService.ListSales().subscribe(
      (data: Sales[]) => {
        this.sales = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}