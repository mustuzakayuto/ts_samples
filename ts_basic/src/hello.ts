// tsc ファイル名 コンパイル
// ts-node hello　実行
var message:string = "Hello!!!!";
console.log(message);
var num:number = 100;

// 型推論(Type Inference)
var id = 1
var email = "test@test.com";
var isActive = true;
var none;

// 型定義(Type definition)
var id:number = 1
var email:string = "test@test.com";
var isActive:boolean = true;
var none:any;
console.log(id,typeof id)
console.log(email,typeof email)
console.log(isActive,typeof isActive)
console.log(none,typeof none)