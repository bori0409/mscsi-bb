import { Component, OnInit } from '@angular/core';
import { strict } from 'assert';
import { map } from 'rxjs';
import { Product } from 'src/app/shared/modeles/products.model';
import { FirebaseCloudStorageService } from '../../shared/services/firebase-cloud-storage.service';

@Component({
  selector: 'app-fridge-content',
  templateUrl: './fridge-content.component.html',
  styleUrls: ['./fridge-content.component.css']
})
export class FridgeContentComponent implements OnInit {

  products?: Product[];
  productId?: string;
  currentProduct?: Product={
    id: "",
    productName: "",
    productQuantity: 0,
    productAddedOn: new Date(),
    
  };
  openEditCard?: boolean;
  constructor( private firebaseService: FirebaseCloudStorageService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }
  retrieveTutorials(): void {
    this.firebaseService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.products = data;  
    });
  }

  clickOnItem(itemSelected: Product){
    console.log(itemSelected.id)
    this.currentProduct = itemSelected;
    this.openEditCard = true;



  }
  itemEditQuantity(itemClickedId: string){
    
  }

  updateProduct(currentProduct: Product): void {
    currentProduct.productQuantity++;
    this.firebaseService.update(currentProduct.id, currentProduct).then(() => {
      console.log('Updated successfully!');
    });
  }

}
