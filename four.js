const products=[
    {
        name:"laptop",price:12000,
    },
    {
        name:"mobile",price:700000,
    },
    {
        name:"laptop bag",price:20000,
    },
    {
        name:"watch",price:2000000,
    },
    {
        name:"mobile charger",price:15000,
    },
];
let maxproduct={name:"",price:0};
let minProduct = { name: "", price: Number.MAX_VALUE };
for (let product of products){
    if(product.price>maxproduct.price)
    {
        maxproduct=product;
    }
    if(product.price<minProduct.price){
        minProduct = product;

    }
    
console.log(
    `The product with maximum ammount is ${maxProduct.name}  which is priced at Rs. ${maxProduct.price}`
  );
  console.log(
    `The product with minimum ammount is ${minProduct.name} which is priced at Rs. ${minProduct.price}`
  );

}
