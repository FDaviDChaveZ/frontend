import { Product } from "../products/products";

export interface Sales {
    productId: Product;
    quantity: Number;
    clientDni: string;
    date: Date;
}
