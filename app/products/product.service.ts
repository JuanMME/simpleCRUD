import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCT_ITEMS } from './product-data';
import { findIndex } from 'lodash';

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

    updateProduct(product: Product) {
        // compares the product id with every id in the array and exits when it finds it
        // when the condition is met, findIndex returns the right index (NOT the id)
        let index = findIndex(this.pItems, (p: Product) => {
            return p.id === product.id;
        });
        this.pItems[index] = product;
    }

    deleteProduct(product: Product) {
        this.pItems.splice(this.pItems.indexOf(product), 1);
        console.log(this.pItems);
    }

}