import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SalesService } from 'src/app/core/services/sales/sales.service';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/core/models/products/products';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
})
export class SalesComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  selectedProducts: any[] = [];
  totalAmount: number = 0;

  salesForm: FormGroup = new FormGroup({
    productId: new FormControl('', Validators.required),
    quantity: new FormControl('', [Validators.required, Validators.min(1)]),
    clientDni: new FormControl('', Validators.required),
    receiptType: new FormControl('', Validators.required)
  });



  displayedColumns: string[] = ['name', 'quantity', 'salePrice', 'subtotal', 'actions'];

  constructor(
    private salesService: SalesService,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productsService.ListProducts().subscribe({
      next: (response) => {
        this.products = response;
        this.filteredProducts = response;
      },
      error: (error) => {
        console.error('Error loading products', error);
      }
    });
  }

  addProduct() {
    console.log('addProduct method called');
    console.log('Valores del formulario en addProduct:', this.salesForm.value);
    const productId = this.salesForm.get('productId')?.value;
    const quantity = this.salesForm.get('quantity')?.value;

    console.log('ProductId:', productId);
    console.log('Quantity:', quantity);

    if (!productId || !quantity) return;

    const product = this.products.find(p => p._id === productId);
    console.log('Product found:', product);

    if (!product) return;

    const subTotal = product.salePrice * quantity;
    this.selectedProducts.push({
      productId: product._id,
      name: product.name,
      quantity,
      salePrice: product.salePrice,
      subtotal: subTotal
    });

    this.totalAmount += subTotal;

    console.log('Selected Products:', this.selectedProducts);
  }

  removeProduct(product: any) {
    console.log('removeProduct method called');
    const index = this.selectedProducts.indexOf(product);
    if (index > -1) {
      this.totalAmount -= this.selectedProducts[index].subtotal;
      this.selectedProducts.splice(index, 1);
    }
  }

  searchClient() {
    console.log('searchClient method called');
    console.log('Buscar cliente con DNI:', this.salesForm.get('clientDni')?.value);
  }

  searchProducts(event: Event) {
    console.log('searchProducts method called');
    const input = event.target as HTMLInputElement;
    const searchTerm = input.value;

    if (!searchTerm) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }

  createSale() {
    console.log('createSale method called');
    console.log('Valores del formulario:', this.salesForm.value);
    // Verificar si el formulario es válido
    if (this.salesForm.invalid) {
      this.salesForm.markAllAsTouched();
      console.log('Formulario inválido');
      console.log('Valores del formulario:');
      console.log('ProductId:', this.salesForm.get('productId')?.value);
      console.log('Quantity:', this.salesForm.get('quantity')?.value);
      console.log('ClientDni:', this.salesForm.get('clientDni')?.value);
      console.log('ReceiptType:', this.salesForm.get('receiptType')?.value);
      return;
    }

    // Verificar si hay productos seleccionados
    if (this.selectedProducts.length === 0) {
      console.log('Sin productos seleccionados');
      return;
    }

    // Construir los datos de la venta en el formato deseado
    const saleData = {
      products: this.selectedProducts.map(p => ({
        productId: p.productId,
        quantity: p.quantity
      })),
      clientDni: this.salesForm.get('clientDni')?.value,
      receiptType: this.salesForm.get('receiptType')?.value
    };

    console.log('Datos de la venta:', saleData);

    // Llamar al servicio para crear la venta
    this.salesService.GenerateSale(saleData).subscribe({
      next: (response) => {
        console.log('Venta registrada con éxito', response);
      },
      error: (error) => {
        console.error('Error creando la venta', error);
      }
    });
  }





}
