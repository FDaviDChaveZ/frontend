import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/core/models/products/products';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  constructor(private productsService: ProductsService, private toastr: ToastrService) {}

  productTypes: string[] = ['Dispositivos periféricos', 'Repuesto de laptops y computadoras', 'Repuesto de impresoras'];

  productForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    salePrice: new FormControl('', Validators.required),
    purchasePrice: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
    productType: new FormControl('', Validators.required)
  });

  public createProduct() {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    const data: Product = this.productForm.value;
    this.productsService.CreateProduct(data).subscribe({
      next: (response) => {
        this.toastr.success('Producto registrado exitosamente','Registro Completado');
        this.productForm.reset();
        console.log(response);
      },
      error: (error) => {
        this.toastr.error('Ocurrio un error al registrar el producto','Error');
        console.log(error);
      }
    });
  }
}
