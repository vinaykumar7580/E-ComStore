import Container from "@/app/components/Container";
import ProductDetails from "@/app/components/products/ProductDetails";
import { product } from "@/utils/Product";

interface IPrams{
    productId?:string;
}


function Product({params}:{params:IPrams}){
    //console.log("params", params)
    
    return(
        <div className="p-8">
            <Container>
                <ProductDetails product={product} />
            </Container>
        </div>
    )

}
export default Product