import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService {

    // Used for testing, this is not how you would normally do it
    getProductsFromService(): Product[] {
        return [{
            id: 1,
            name: 'Scissors',
            description: 'use this to cut stuff',
            price: 4.99
        }, {
            id: 2,
            name: 'Steak Knives',
            description: 'use this to eat food with',
            price: 10.99
        }, {
            id: 3,
            name: 'Shot Glass',
            description: 'use this to take shots',
            price: 5.99
        }]
    }

}