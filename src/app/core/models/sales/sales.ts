import { Product } from "../products/products";

export interface Sales {
    receiptId: string;
    products: Product[];
    clientDni: string;
    total: Number;
    date: Date;
}
