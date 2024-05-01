import { useEffect, useState } from "react"
import { CartType } from "../utils/types";

export const useCart = () => {
    const [cart, setCart] = useState<CartType[]>(JSON.parse(localStorage.getItem("cart") || "") as CartType[]);
    const [showCart, setShowCart] = useState<boolean>(false);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])
    
    return { cart, showCart, setCart, setShowCart }
}