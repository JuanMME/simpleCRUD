import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    templateUrl: 'product.template.html'
})

export class ProductComponent implements OnInit {
    products: Product[];

    constructor(private _ProductService: ProductService) {}

    ngOnInit() {
        this.getProducts();
    }

    getProducts() {
        this.products = this._ProductService.getProductsFromData();
    }

}
