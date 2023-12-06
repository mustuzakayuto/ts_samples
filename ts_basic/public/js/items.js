"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var itemName = ["コーヒー", "紅茶", "ほうじ茶"];
var item1 = {
    id: 1,
    name: "コーヒー",
    price: 350,
};
var item2 = {
    id: 2,
    name: "紅茶",
    price: 400,
};
var item3 = {
    id: 3,
    name: "ほうじ茶",
    price: 300,
};
var items = [item1, item2, item3];
console.log(items);
var borderPrice = 350;
var fillterItems = items.filter((item) => item.price <= borderPrice);
console.log(fillterItems);
function calculateTotalPrice(price, amount) {
    var totalprice = price * amount;
    return totalprice;
}
function findItem(id) {
    var result = items.find((item) => item.id == id);
    return result;
}
var amount = 5;
var totalprice = calculateTotalPrice(item1.price, amount);
console.log(totalprice);
var itemid = 1;
var selectItem = findItem(itemid);
console.log(selectItem);
// エラー
// tsc items.ts 
// items.ts:33:24 - error TS2550: Property 'find' does not exist on type 'Item[]'. Do you need to change your target library? Try changing the 'lib' compiler option to 'es2015' or later.
// 33     var result = items.find((item)=>item.id==id);
//                           ~~~~
// Found 1 error in items.ts:33
