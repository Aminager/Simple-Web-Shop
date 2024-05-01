
import { CartType, ProductType } from "../utils/types";
import { Product } from "./Product";


export const ProductGallery = ({products, cart, setCart} : {products: ProductType[], cart: CartType[], setCart: (cart: CartType[]) => void}) => {
    return(
        <div className="flex flex-col md:flex-row flex-wrap gap-2 justify-center ">
            {
                products?.map(p => <Product key={p.id} p={p} cart={cart} setCart={setCart} />)
            }
        </div>
    );
}