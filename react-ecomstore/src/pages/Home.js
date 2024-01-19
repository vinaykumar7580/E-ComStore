import Navbar from "../features/navbar/Navbar";
import ProductList from "../features/products-list/ProductList";

function Home(){
    return(
        <div>
            <Navbar>
                <ProductList/>
            </Navbar>
        </div>
    )
}
export default Home;