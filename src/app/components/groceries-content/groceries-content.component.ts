import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { DefaultProducts } from 'src/app/shared/modeles/default-products.model';
import { Products } from 'src/app/shared/modeles/products.model';
import { FirebaseCloudStorageService } from 'src/app/shared/services/firebase-cloud-storage.service';

@Component({
  selector: 'app-groceries-content',
  templateUrl: './groceries-content.component.html',
  styleUrls: ['./groceries-content.component.css']
})
export class GroceriesContentComponent implements OnInit {

  products?: DefaultProducts[];

  constructor( private firebaseService: FirebaseCloudStorageService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }
  retrieveTutorials(): void {
    this.firebaseService.getDefaultList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.products = data;
      console.log(this.products)
      console.log("WTFFF")
    });
  }

}
