import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { DefaultProducts } from 'src/app/shared/modeles/default-products.model';
import { Product } from 'src/app/shared/modeles/products.model';
import { FirebaseCloudStorageService } from 'src/app/shared/services/firebase-cloud-storage.service';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';
import {TuiAlertService, TuiNotification} from '@taiga-ui/core';
@Component({
  selector: 'app-groceries-content',
  templateUrl: './groceries-content.component.html',
  styleUrls: ['./groceries-content.component.css'],
})
export class GroceriesContentComponent implements OnInit {
  shoppingCart!: DefaultProducts[];
  productToAdd!: DefaultProducts;
  now = new Date();

  products?: Product[];

  constructor( private readonly alertService: TuiAlertService,private firebaseService: FirebaseCloudStorageService, public shoppingCartService:ShoppingCartService) {}

  ngOnInit(): void {
    this.retrieveTutorials();
    this.shoppingCart = [];
  }
  retrieveTutorials(): void {
    this.firebaseService
      .getDefaultList()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {
        this.products = data;
        console.log(this.products);
        console.log('WTFFF');
      });
  }

  addToShoppingCart(product: DefaultProducts) {
    //names[0] = prompt("New member name?");
    //localStorage.setItem("names", JSON.stringify(names));
    this.productToAdd = product;
    this.productToAdd.defaultProductAddedOn = this.now;
    //const result = words.filter(word => word.length > 6);
    this.shoppingCart.filter((productSearc) => {
      if (productSearc.id == this.productToAdd.id) {
        console.log('PRESSED in the IF');
        return;
      } else {
        this.shoppingCart?.push(this.productToAdd);
        console.log('PRESSED out the IF');
      }
    });
  }
  seeAdd() {
    console.log(this.shoppingCart);
  }
  showNotification(): void {
    this.shoppingCartService.sendShoppingCart();
    this.alertService.open(`option`, {label: `Products have been added to your frige!`, status: TuiNotification.Success,
    autoClose: true,}).subscribe();
}
}
