import { Component, OnInit, DoCheck } from '@angular/core';
import { Product } from 'classes/product';
import { ProductService } from 'services/product.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormValidationComponent implements OnInit, DoCheck {
  products: string[];
  productTypes: Object[];
  product = new Product();

  constructor(
    private service: ProductService
  ) { }

  ngOnInit() {
    // this.products = this.service.getProducts();
    this.productTypes = [
      {id: 'type1', name: 'Type 1'},
      {id: 'type2', name: 'Type 2'},
      {id: 'type3', name: 'Type 3'},
      {id: 'type4', name: 'Type 4'},
      {id: 'type5', name: 'Type 5'}
    ];
    this.product.type = this.productTypes[1];

    this.products = Object.keys(localStorage).map((key) => {
      return JSON.parse(localStorage.getItem(key))
    });
    console.log("Products list display: ", this.products);

    let timer = setTimeout(() => {
      console.log('test', this.products);
    }, 0);

    clearTimeout(timer);
  }

  ngDoCheck() {
    console.log('docheck executed => ', this.product);
  }

  addProduct() {
    console.log('addProduct called=> ', this.product);
    localStorage.setItem("prod-"+this.product.name.toLowerCase(), JSON.stringify(this.product));
    // this.products.push(this.product);
    let obj = Object.assign({}, this.products);
    console.log("Obj:", obj);

    this.product = new Product();

  }

}
