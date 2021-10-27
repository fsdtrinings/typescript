 class client{
 clientName:string;
 clientId:number;
 balance :number;
 
 constructor(clientName:string,clientId:number,balance:number)
 {
    this.clientName = clientName;
    this.clientId = clientId;
    this.balance = balance;
 }

 getCashBack():number
 {
     let cashBack :number;
     if(this.balance>10000)
     {
        cashBack = this.balance*0.05;
        this.balance += cashBack;
    }
     return cashBack;
 }

}//end of class


let client1 = new client('Amit',101,6850);
let client2 = new client('Ramesh',101,15850);

var cashback = client1.getCashBack();
console.log("Cash Back earned :- Client Name "+client1.clientName+" - "+cashback);
cashback = client2.getCashBack();
console.log("Cash Back earned :- Client Name "+client2.clientName+" - "+cashback);


class ABC{}

export{client,ABC}
