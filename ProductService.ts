import { ProductDetails } from './ProductDetails';
class ProductService
{
     // to communicate with Spring boot Rest Web Service (API)
    getAllProducts():ProductDetails[]
    {
        // REST API 

        let p1 = {
            productName:"HP-101",
            cost:12000,
            category:"Laptop"
        }
        let p2 = {
            productName:"Dell-101",
            cost:10000,
            category:"Laptop"
        }
        let p3 = {
            productName:"Asus",
            cost:15000,
            category:"Laptop"
        }



        return [p1,p2,p3];
    }

    // ...../{gender}
    getProductsBasedOnGender()
    {

    }

    //  post api
    addProduct(product:ProductDetails)
    {

    }

    
}