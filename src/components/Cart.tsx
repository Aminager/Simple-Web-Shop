import { CartType } from "../utils/types";


export const Cart = ({cart, setShowCart} : {cart: CartType[], setShowCart: (show: boolean) => void}) => {
    
    const handleClick = () => {
        setShowCart(true);
    }

    return(
        <div onClick={handleClick} className="rounded-full bg-blue-light w-10 h-10 flex justify-center items-center text-2xl">
            {cart?.reduce((sum, item) => sum += item.amount, 0)}
        </div>
    );
}