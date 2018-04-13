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
        // displays the form
        this.productForm = true;
        this.isNewForm = false;
        // assigns the product values to newProduct, so that it is shown on the edit product form
        this.newProduct = product;
    }

    showAddProductForm() {
        // resets the form if edited product
        if (this.products.length) {
            this.newProduct = {};
        }
        // displays the form
        this.productForm = true;
        this.isNewForm = true;
    }

    saveProduct(product: Product) {
        if (this.isNewForm) {
            // add a new product
            this._ProductService.addProduct(product);
        } else {
            // update the existing product
        }
        this.productForm = false;
    }
}
