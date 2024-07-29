
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/app/core/models/products/products';
import { ProductsService } from 'src/app/core/services/products/products.service';import { Component } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {

  products: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.listProducts();
  }

  public listProducts(): void {
    this.productsService.ListProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
