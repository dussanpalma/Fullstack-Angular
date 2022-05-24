import { Component, OnInit } from '@angular/core';
import { Products } from '../shared/interfaces/products';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products!: Products[];

  constructor(private productsService: ProductsService) {}

  ngOnInit():void {
    this.productsService.getProducts().subscribe(
     
      products => this.products = products

    );
  }

}
