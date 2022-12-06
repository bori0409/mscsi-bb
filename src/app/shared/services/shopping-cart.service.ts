import { Injectable } from '@angular/core';
import { Product } from '../modeles/products.model';
import { DefaultProducts } from '../modeles/default-products.model';
import * as firebase from 'firebase/firestore';
import { FirebaseCloudStorageService } from './firebase-cloud-storage.service';
import { delay } from 'cypress/types/bluebird';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor( private FirebaseCloudStorageService: FirebaseCloudStorageService ) {
    this.FirebaseCloudStorageService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.productsInTheFridge = data;  
    });
  console.log(this.productsInTheFridge);
  console.log(this.products);
   }
  public products:Product[]=[];
  public productsSend:boolean=false;
 productsInTheFridge: Product[]


  public addProduct(product:Product){
    const found=this.products.filter(x=>x.id==product.id);
    if (found.length>0){
      found[0].productQuantity++;
    }
    else{
      this.products.push(
        {
          id: product.id,
          productName:product.productName,
          productQuantity:1,
          productAddedOn:new Date(Date.now()),
          productExpPeriod:product.productExpPeriod,
          

        }
      )
    }
    
  }

  public substractProduct(product:Product){
    const found=this.products.filter(x=>x.id==product.id);
    if (found.length>0){
      found[0].productQuantity--;
      console.log(found[0].productQuantity);
      console.log(found[0].productName);
      
      if (found[0].productQuantity==0){
        //remove from cart
        this.products=this.products.filter(x=>x.id!=product.id);
        
       
      }
    }
 
    
  }

  public getProduct(product:Product):Product | undefined{
    const found=this.products.filter(x=>x.id==product.id);
    if (found.length>0){
    return{
      id:found[0].id,
      productName:found[0].productName,
      productQuantity:found[0].productQuantity,
      productAddedOn:found[0].productAddedOn,
      productExpPeriod:found[0].productExpPeriod,

    }
    }
    return undefined
  }
sendShoppingCart(){
  this.productsSend=true;
  //firebase.firestore().collection('shoppingCart').add(this.products);
  //send shoppingcard to firebase
  //firebase.firestore().collection('shoppingCart').add(this.products);



  this.products.forEach(product => { 
//check if product is already in the fridge

//check if the current product is already in the fridge
const productInTheFridgelp=this.productsInTheFridge.filter(x=>x.productName==product.productName && new Date(x.productAddedOn).getDate()== new Date(product.productAddedOn).getDate());
console.log(new Date(product.productAddedOn).getDate());
console.log(productInTheFridgelp);
console.log(this.productsInTheFridge);




//check if product is already in the fridge




    const productInTheFridge=this.productsInTheFridge.filter(x=>x.productName==product.productName && new Date(x.productAddedOn).getDate()== new Date(product.productAddedOn).getDate()); 
    console.log(new Date(product.productAddedOn).getDate());
    console.log(productInTheFridge);
    console.log(this.productsInTheFridge);
    
    
    if (productInTheFridge.length>0){
      console.log("IF TRIGGERED");
      
      productInTheFridge[0].productQuantity+=product.productQuantity;
      this.FirebaseCloudStorageService.update(productInTheFridge[0].id,productInTheFridge[0]);
    }
    else{
      console.log("ELSE TRIGGERED");
      this.FirebaseCloudStorageService.create(product);
    }
  });

   
  


  this.products=[];
  this.productsSend=false;
  



}
}