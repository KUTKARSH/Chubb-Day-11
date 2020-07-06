import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {

  items : Array<any>;
  constructor() {
    let str =  localStorage.getItem("products");
    if(str)
    this.items = JSON.parse(localStorage.getItem("products")).list;
    else
    this.items = [];
    // this.items = [
    //   {
    //     name : "beardo",
    //     price : "4.5",
    //     stock : 5
    //   },
    //   {
    //     name : "Dettol",
    //     price : "5",
    //     stock : 5
    //   }
    // ];
  }

  removeItem(idx : number){
    this.items[idx].stock--;
    localStorage.setItem("products",JSON.stringify({
      list : this.items[idx].stock ? this.items : this.items.splice(idx,1),
    }));
    console.log(this.items);
  }

  ngOnInit(): void {
  }

}
