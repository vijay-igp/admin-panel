import { Component, ElementRef, OnInit, DoCheck, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Product } from 'classes/product';
import { ProductService } from 'services/product.service';
declare var $:any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormValidationComponent implements OnInit, DoCheck {
  @ViewChild('productForm') productForm: NgForm;
  elementRef: ElementRef;

  products: Object[];
  productTypes: Object[];
  product: Product;
  // items: Object[];
  // value: any = {};

  constructor(
    private service: ProductService,
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

    // this.items = [
    //   {id: 'type1', text: 'Type 1'},
    //   {id: 'type2', text: 'Type 2'},
    //   {id: 'type3', text: 'Type 3'},
    //   {id: 'type4', text: 'Type 4'},
    //   {id: 'type5', text: 'Type 5'}
    // ];
    this.product = new Product("");
    // this.product.type = "";

    this.products = Object.keys(localStorage).map((key) => {
      return JSON.parse(localStorage.getItem(key))
    });
    console.log("Products list display: ", this.products);

    let timer = setTimeout(() => {
      console.log('test', this.products);
    }, 0);

    clearTimeout(timer);
  }

  // selected(value: any): void {
  //   console.log('selected value: ', value);
  // }

  // refreshValue(value: any): void {
  //   this.value = value;
  // }

  ngDoCheck() {
    // console.log("Jquery test execution: ", $('.container-fluid'));
    console.log('docheck executed => ', this.product);    
  }

  addProduct() {
    console.log('addProduct called=> ', this.product);
    let prodStr = JSON.stringify(this.product);
    let prodObj = Object.assign({}, this.product);
    console.log('prodObj:', prodObj);
    
    localStorage.setItem("prod-"+this.product.name.toLowerCase(), prodStr);
    this.products.push(prodObj);

    this.product = new Product();
    this.productForm.reset();

  }

}
