const productdetails={
    name:"apple 2020 macbook ",
    price: 82000,
    color:'greay ',
    hardisk: "256gb",

};
console.log("bellow are the product details ");

console.log("Below are the product details.");
for (let keys of Object.keys(productDetails)) {
  console.log(`+{keys} : +{productDetails[keys]}`);
}