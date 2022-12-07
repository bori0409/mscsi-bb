import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore/collection/collection';
import { Firestore, collectionData, collection,  } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import * as firebase from 'firebase/firestore';
import { Observable } from 'rxjs';
import { DefaultProducts } from '../modeles/default-products.model';
import { Product } from '../modeles/products.model';


@Injectable({
  providedIn: 'root'
})
export class FirebaseCloudStorageService {
  //userData: any; // Save logged in user data
  private dbPath = '/usersProducts/'
  //private dbPath = '/usersProducts/myNewUser/userProducts'
  private dbPath2 = '/userProducts'
  private user;

  userProducts: AngularFirestoreCollection<Product>;
  defaultProductsList: AngularFirestoreCollection<Product>;

  constructor( private db: AngularFirestore, ) {
    
  this.defaultProductsList = db.collection('/Product')
  
  }
  getUserId(){
    this.user = JSON.parse(localStorage.getItem('user')!);
    
    this.userProducts = this.db.collection(this.dbPath + this.user.uid+this.dbPath2);
  }
getDefaultList(): AngularFirestoreCollection<Product> {
  return this.defaultProductsList;
}

newUserCollection(userId:string){
  this.db.collection(this.dbPath).doc(userId).collection(this.dbPath2);
  
}

  getAll(): AngularFirestoreCollection<Product> {
    this.getUserId();
    console.log(this.user);
    
    return this.userProducts;
    
  }
  create(shoppingCart: Product): any {

//add a new product to the database

 





//tjhdtjhtjrt

const customId = "id" + Math.round((new Date()).getTime() / 1000).toString() + shoppingCart.productName.slice(0, 3);
    return this.userProducts.doc(customId).set({ 
      id: "id" + Math.round((new Date()).getTime() / 1000).toString() + shoppingCart.productName.slice(0, 3),
      productName:shoppingCart.productName,
      productQuantity:shoppingCart.productQuantity,
      productAddedOn:new Date(Date.now()),
      productExpPeriod:shoppingCart.productExpPeriod,
      

    });
  }

  update(id: string, data: any): Promise<void> {
    console.log(id, data);
    return this.userProducts.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.userProducts.doc(id).delete();
  }
}

