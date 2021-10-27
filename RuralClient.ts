import {client} from './Client';

class RuralClient extends client
{
    villageName :string;

    constructor(clientName:string,clientId:number,balance:number,villageName:string)
 {
    super(clientName,clientId,balance);
    this.villageName = villageName;
    
 }
  fundTransfer():number
  {
    
     // business objective code
    return 0;

  }

}
