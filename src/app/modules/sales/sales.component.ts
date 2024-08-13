import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SalesService } from 'src/app/core/services/sales/sales.service';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/core/models/products/products';
import { ToastrService } from 'ngx-toastr'; 

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
    private productsService: ProductsService,
    private toastr: ToastrService 
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
    const productId = this.salesForm.get('productId')?.value;
    const quantity = this.salesForm.get('quantity')?.value;

    if (!productId || !quantity) return;

    const product = this.products.find(p => p._id === productId);

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
  }

  removeProduct(product: any) {
    const index = this.selectedProducts.indexOf(product);
    if (index > -1) {
      this.totalAmount -= this.selectedProducts[index].subtotal;
      this.selectedProducts.splice(index, 1);
    }
  }

  searchClient() {
    console.log('Buscar cliente con DNI:', this.salesForm.get('clientDni')?.value);
  }

  searchProducts(event: Event) {
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
    
    if (this.salesForm.invalid) {
      this.salesForm.markAllAsTouched();
      return;
    }

    
    if (this.selectedProducts.length === 0) {
      this.toastr.error('Debe seleccionar al menos un producto.', 'Error');
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

    // Llamar al servicio para crear la venta
    this.salesService.GenerateSale(saleData).subscribe({
      next: (response) => {
        this.toastr.success('Venta registrada con éxito', 'Confirmación');
        this.salesForm.reset(); 
        this.selectedProducts = []; 
        this.totalAmount = 0; // 
      },
      error: (error) => {
        this.toastr.error('Error al registrar la venta', 'Error');
        console.error('Error creando la venta', error);
      }
    });
  }
}
