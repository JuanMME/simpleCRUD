import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { clone } from 'lodash';

@Component({
    moduleId: module.id,
    templateUrl: 'product.template.html'
})

export class ProductComponent implements OnInit {
    products: Product[];
    productForm: boolean = false;
    editProductForm: boolean = false;
    isNewForm: boolean;
    newProduct: any = {};
    editedProduct: any = {};

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
        this.editProductForm = true;
        // created a clone of the product, so that it is shown on the edit product form
        this.editedProduct = clone(product);
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
        }
        this.productForm = false;
    }

    updateProduct() {
        this._ProductService.updateProduct(this.editedProduct);
        this.editProductForm = false;
        this.editedProduct = {};
    }

    removeProduct(product: Product) {
        this._ProductService.deleteProduct(product);
    }

    cancelNewProduct() {
        this.newProduct = {}
        this.productForm = false;
    }

    cancelEdits() {
        this.editedProduct = {};
        this.editProductForm = false;
    }

}
