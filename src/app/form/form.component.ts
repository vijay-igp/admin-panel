import { Component, OnInit, OnChanges, DoCheck, SimpleChanges, Input } from '@angular/core';
import { Product } from 'classes/product';
import { ProductService } from 'services/product.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormValidationComponent implements OnInit, OnChanges, DoCheck {
  products: Product[];
  productTypes: Object[];
  product = new Product();

  constructor(
    private service: ProductService
  ) { }

  ngOnInit() {
    this.products = this.service.getProducts();
    this.productTypes = [
      {id: 'type1', name: 'Type 1'},
      {id: 'type2', name: 'Type 2'},
      {id: 'type3', name: 'Type 3'},
      {id: 'type4', name: 'Type 4'},
      {id: 'type5', name: 'Type 5'}
    ];
    // this.product = new Product('Flowers', 'Bouquet of flowers', 450, '360gms');
    let timer = setTimeout(() => {
      console.log(this.products);
      // this.product = this.products[0];
    }, 0);

    clearTimeout(timer);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log(this.product);
  }

  ngDoCheck() {
    console.log('docheck executed => ', this.product);
  }

  addProduct() {
    console.log('addProduct called=> ', this.product);
    localStorage.setItem("prod-"+this.product.name.toLowerCase(), JSON.stringify(this.product));
    this.product = new Product();
  }

}
