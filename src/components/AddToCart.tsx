import { CartType, ProductType } from "../utils/types";

export const AddToCart = ({p, cart, setCart} : {p: ProductType, cart: CartType[], setCart: (cart: CartType[]) => void}) => {

    const handleClick = () => {
        if (!cart) {
            setCart([{id: p.id, amount: 1}]);
        } else {
            const index = cart.findIndex(item => item.id  == p.id)
            if (index == -1) {
                setCart([...cart, {id: p.id, amount: 1}]);
            } else {
                const cartItem = cart[index]
                const newCartItem = {id: cartItem.id, amount: cartItem.amount + 1}
                const newCart = [...cart]
                newCart[index] = newCartItem
                setCart(newCart);
            }
        }
    }

    return(
        <button onClick={handleClick} className="w-24 border-2 border-gray-600 rounded-xl p-1">Add to cart</button>
    );
}