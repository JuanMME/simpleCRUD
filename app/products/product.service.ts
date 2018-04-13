import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCT_ITEMS } from './product-data';

@Injectable()
export class ProductService {
    private pItems = PRODUCT_ITEMS;

    getProductsFromData(): Product[] {
        console.log(this.pItems);
        return this.pItems;
    }

    addProduct(product: Product) {
        this.pItems.push(product);
        console.log(this.pItems);
    }

}