export type User = {
 id:number;
 name:{
    first:string;
    last:string;
 } 
 email:string;
 isActive:boolean;
}

export type Item = {
    id:number;
    name:string;
    price:number;
}