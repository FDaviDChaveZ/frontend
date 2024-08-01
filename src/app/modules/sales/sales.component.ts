import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Sales } from 'src/app/core/models/sales/sales';
import { SalesService } from 'src/app/core/services/sales/sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent {
  constructor(private salesService: SalesService) { }

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
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
