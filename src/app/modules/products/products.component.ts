import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/app/core/models/products/products';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  constructor(private productsService: ProductsService) {}

  productTypes: string[] = ['Peripheral devices', 'Laptop and computer spare parts', 'Printer spare parts'];

  userForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    salePrice: new FormControl(''),
    purchasePrice: new FormControl(''),
    quantity: new FormControl(''),
    productType: new FormControl('')
  });

  public createProduct() {
    const data: Product = this.userForm.value;
    this.productsService.CreateEmployee(data).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
