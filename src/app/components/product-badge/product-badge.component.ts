import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/modeles/products.model';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';
import { DefaultProducts } from '../../shared/modeles/default-products.model';

@Component({
  selector: 'app-product-badge',
  templateUrl: './product-badge.component.html',
  styleUrls: ['./product-badge.component.css']
})


export class ProductBadgeComponent implements OnInit {

  constructor(cartService:ShoppingCartService) { }
@Input("product") product!:DefaultProducts


  ngOnInit(): void {

  }

}
