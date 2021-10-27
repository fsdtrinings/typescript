export {}
class MyApp
{
   doThings(a:number,b:number=20)
   {
       console.log("DoThings called "+(a+b));
   }
}//end of typescript class

let obj = new MyApp();
obj.doThings(15);


// tsc Demo1.ts --watch