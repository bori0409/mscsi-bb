import { Component, Input, OnInit } from '@angular/core';
import { DefaultProducts as DefaultProduct } from '../../shared/modeles/default-products.model';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';
import { Product } from '../../shared/modeles/products.model';

@Component({
  selector: 'app-default-product-badge',
  templateUrl: './default-product-badge.component.html',
  styleUrls: ['./default-product-badge.component.css']
})
export class DefaultProductBadgeComponent implements OnInit {

  constructor(public shoppingCartService:ShoppingCartService) { }
  @Input("defaultProduct") defaultProduct!:Product
  ngOnInit(): void {
  }

}
