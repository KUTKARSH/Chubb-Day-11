import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.css']
})
export class ProductCreationComponent implements OnInit,OnDestroy {

  productName : string;
  productPrice : string;
  productStock : string;
  productAddedStatus : boolean;

  constructor() { 
    this.productAddedStatus = false;
  }

  ngOnInit(): void {
  }

  addProd(){
    let products = JSON.parse(localStorage.getItem("products"));
    if(products)
    products.list.push({
      name : this.productName,
      price : this.productPrice,
      stock : this.productStock,
    });
    else
    {
      products = {
        list : [{
          name : this.productName,
        price : this.productPrice,
        stock : this.productStock,
        }]
      }
    } 
    localStorage.setItem("products",JSON.stringify(products));
    this.productAddedStatus = true;
    console.log("Product added");
  }

  ngOnDestroy(){
    
  }

}
