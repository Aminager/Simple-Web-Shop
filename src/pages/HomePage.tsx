import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { useCart } from "../hooks/useCart";

export const HomePage = () => {
    const navigate = useNavigate();
    const { cart, showCart, setCart, setShowCart} = useCart();

    return(
        <div className="h-full">
            <Header cart={cart} showCart={showCart} setCart={setCart} setShowCart={setShowCart}/>
            <div className="flex flex-col justify-center items-center gap-10">
                <p className="text-8xl">Hej!</p>
                <button 
                    className="bg-blue text-yellow border-2 rounded-full h-10 w-36" 
                    onClick={() => navigate("/shop")}>
                        Go to shop
                </button>

            </div>
        </div>
    );
}