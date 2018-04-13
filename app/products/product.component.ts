import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    templateUrl: 'product.template.html'
})

export class ProductComponent implements OnInit {
    products: Product[];
    productForm: boolean = false;
    isNewForm: boolean;
    newProduct: any = {};

    constructor(private _ProductService: ProductService) {}

    ngOnInit() {
        this.getProducts();
    }

    getProducts() {
        this.products = this._ProductService.getProductsFromData();
    }

    showEditProductForm(product: Product) {
        if (!product) {
            this.productForm = false;
            return;
        }
        this.productForm = true;
        this.isNewForm = false;
        this.newProduct = product;
    }

}
