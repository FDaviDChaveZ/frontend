// src/app/core/models/sales/sales.ts
export interface Sales {
    receiptId: string;
    receiptType: string;
    products: {
        productId: string;
        quantity: number;
        name: string;
        salePrice: number;
        subtotal: number;
    }[];
    client: {
        clientDni: string;
        firstName: string;
        lastName: string;
    };
    total: number;
    date: Date;
    employee: {
        id: string;
        firstName: string;
        lastName: string;
    };
}
