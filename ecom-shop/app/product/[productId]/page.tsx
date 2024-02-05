interface IPrams{
    productId?:string;
}


function Product({params}:{params:IPrams}){
    //console.log("params", params)
    return(
        <div>
            Product page
        </div>
    )

}
export default Product