import { Component, ElementRef, OnInit, DoCheck, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Product } from 'classes/product';
declare var $:any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormValidationComponent implements OnInit, DoCheck {
  @ViewChild('productForm') productForm: NgForm;
  elementRef: ElementRef;

  products: any[];
  productTypes: any[];
  product: Product;

  constructor(
    elementRef: ElementRef
  ) {
    this.elementRef = elementRef;
  }

  ngOnInit() {
    console.log('productForm ===>', this.productForm);

    this.productTypes = [
      {id: 'type1', name: 'Type 1'},
      {id: 'type2', name: 'Type 2'},
      {id: 'type3', name: 'Type 3'},
      {id: 'type4', name: 'Type 4'},
      {id: 'type5', name: 'Type 5'}
    ];

    this.product = new Product();
    this.product.type = "";
    console.log('product object ==>', this.product);

    this.products = Object.keys(localStorage).map((key) => {
      return JSON.parse(localStorage.getItem(key))
    });

    let timer = setTimeout(() => {
      console.log('test', this.products);
    }, 0);

    clearTimeout(timer);
  }

  ngDoCheck() {}

  addProduct() {
    let prodStr = JSON.stringify(this.product);
    let prodObj = Object.assign({}, this.product);
    localStorage.setItem("prod-"+this.product.name.toLowerCase(), prodStr);
    this.products.push(prodObj);

    this.product = new Product();
    this.productForm.reset();

  }

}
