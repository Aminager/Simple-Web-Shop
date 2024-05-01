import { useNavigate } from "react-router-dom";
import { Cart } from "./Cart";
import { CartType } from "../utils/types";
import { SlidingCart } from "./SlidingCart";

export const Header = ({cart, showCart, setCart, setShowCart} : {cart: CartType[], showCart: boolean, setCart: (cart: CartType[]) => void, setShowCart: (show: boolean) => void }) => {
    const navigate = useNavigate();

    return(
        <div className="sticky top-0 bg-blue text-yellow flex justify-self-center justify-center items-center w-full h-24 gap-12 z-10">
            <a onClick={() => navigate("/")} className="text-4xl font-bold">IKEA</a>
            <div className="flex gap-12">
                <a onClick={() => navigate("/shop")} className="text-xl">Shop</a>
            </div>
            <Cart cart={cart} setShowCart={setShowCart} />
            <SlidingCart cart={cart} showCart={showCart} setCart={setCart} setShowCart={setShowCart}/>

        </div>
    );
}