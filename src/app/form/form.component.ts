import { Component, OnInit, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import { Product } from 'classes/product';
import { ProductService } from 'services/product.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnChanges, DoCheck {
  products: Product[];
  product = new Product();

  constructor(
    private service: ProductService
  ) { }

  ngOnInit() {
    this.products = this.service.getProducts();
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

}
