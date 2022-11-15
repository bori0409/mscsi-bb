import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Products } from 'src/app/shared/modeles/products.model';
import { FirebaseCloudStorageService } from '../../shared/services/firebase-cloud-storage.service';

@Component({
  selector: 'app-fridge-content',
  templateUrl: './fridge-content.component.html',
  styleUrls: ['./fridge-content.component.css']
})
export class FridgeContentComponent implements OnInit {

  products?: Products[];

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
      console.log(this.products)
      console.log("WTFFF")
    });
  }


}
