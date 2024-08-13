import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Sales } from 'src/app/core/models/sales/sales';
import { SalesService } from 'src/app/core/services/sales/sales.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent {
  constructor(private salesService: SalesService, private toastr: ToastrService) { }

  salesForm: FormGroup = new FormGroup({
    productId: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
    clientDni: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required)
  });

  public createSale() {
    if (this.salesForm.invalid) {
      this.salesForm.markAllAsTouched();
      return;
    }

    const data: Sales = this.salesForm.value;
    this.salesService.GenerateSale(data).subscribe({
      next: (response) => {
        this.toastr.success('La venta se registro exitosamente','Venta Registrada');
        this.salesForm.reset();
        console.log(response);
      },
      error: (error) => {
        this.toastr.error('Ocurrio un error al registrar la venta', 'Error');
        console.log(error);
      }
    });
  }
}
