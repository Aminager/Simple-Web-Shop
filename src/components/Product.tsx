import { useNavigate } from "react-router-dom";
import { CartType, ProductType } from "../utils/types";
import { AddToCart } from "./AddToCart";


export const Product = ({p, cart, setCart} : {p : ProductType, cart: CartType[], setCart: (cart: CartType[]) => void}) => {
    const navigate = useNavigate();

    return(
        <div 
            className="flex flex-col justify-center items-center md:w-[30%] h-[36vh] mt-4 mb-4">
            <img onClick={() => navigate("/product/"+p.id)} className="h-2/3 object-contain rounded-3xl" src={p.thumbnail} />
            <div className=" bg-red-500 text-white rounded-3xl p-1">DISCOUNT {Math.floor(p.discountPercentage)}%</div>
            <div onClick={() => navigate("/product/"+p.id)} className="flex gap-4  w-4/5 justify-between">
                <div className="flex flex-col justify-start overflow-hidden w-2/3">
                    <p className="overflow-hidden text-nowrap text-lg font-medium">{p.title}</p>
                    <p>{p.brand}</p>
                </div>
                <div className="flex flex-col justify-center">
                    <p>{p.price} kr</p>
                    {p.stock ? <p className=" text-green-600">In stock</p> : <p className="text-red-600">Out of stock</p>}
                    <p>Rating: {p.rating}/5</p>
                </div>
            </div>
            <AddToCart p={p} cart={cart} setCart={setCart} />
        </div>
    );
}