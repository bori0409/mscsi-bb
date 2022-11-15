import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore/collection/collection';
import { Firestore, collectionData, collection,  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DefaultProducts } from '../modeles/default-products.model';
import { Products } from '../modeles/products.model';


@Injectable({
  providedIn: 'root'
})
export class FirebaseCloudStorageService {
  //userData: any; // Save logged in user data
  private dbPath = '/usersProducts/'
  //private dbPath = '/usersProducts/myNewUser/userProducts'
  private dbPath2 = '/userProducts'
  private user = JSON.parse(localStorage.getItem('user')!)

  userProducts: AngularFirestoreCollection<Products>;
  defaultProductsList: AngularFirestoreCollection<DefaultProducts>;

  constructor( private db: AngularFirestore) {
    this.userProducts = db.collection(this.dbPath + this.user.uid+this.dbPath2);
  this.defaultProductsList = db.collection('/defaultProductList')
  }
getDefaultList(): AngularFirestoreCollection<DefaultProducts> {
  return this.defaultProductsList;
}

  getAll(): AngularFirestoreCollection<Products> {
    return this.userProducts;
  }
  create(tutorial: Products): any {
    return this.userProducts.add({ ...tutorial });
  }

  update(id: string, data: any): Promise<void> {
    return this.userProducts.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.userProducts.doc(id).delete();
  }
}

