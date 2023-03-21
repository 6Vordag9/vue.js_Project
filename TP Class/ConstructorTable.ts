export class Food {
name: any;
price: any;
[x: string]: any;
    constructor(
      name : String,
        price: String,
      sostav : String,
     
    ){
      Object.assign(this, {name: name, price:price, sostav:sostav});
    }
  }