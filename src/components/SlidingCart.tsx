import { useEffect, useState } from "react";
import { CartType, ProductType } from "../utils/types";
import { getProduct } from "../utils/API";

export const SlidingCart = ({cart, showCart, setCart, setShowCart} : {cart: CartType[], showCart: boolean, setCart: (cart: CartType[]) => void, setShowCart: (show: boolean) => void}) => {
    const [productCart, setProductCart] = useState<ProductType[]>();

    useEffect(() => {
        if (showCart) {
            const productsPromises: Promise<ProductType>[] = cart.map(p=> getProduct(p.id))
            Promise.all(productsPromises).then(values => setProductCart(values))
        }
    }, [showCart, cart])

    const removeProduct = (id: number) => {
        const index = [...cart].findIndex(item => item.id == id)
        if (cart[index].amount == 1) {
            const newCart = [...cart].filter(item => item.id != id)
            setCart(newCart)
        } else {
            const newCart = [...cart]
            newCart[index].amount -= 1
            setCart(newCart);
        }
    }

    const addProduct = (id: number) => {
        const index = [...cart].findIndex(item => item.id == id)
        const newCart = [...cart]
        newCart[index].amount += 1
        setCart(newCart);
    }

    return(
        <div>
            {
                showCart ? 
                <div className="fixed top-0 right-0 h-screen sm:w-[80vw] md:w-[35vw] bg-blue-light z-30 flex flex-col items-center">
                    <div className="flex mt-[8vh] mb-[8vh] text-4xl justify-around w-full">
                        <div className="">
                            Cart
                        </div>
                        <div onClick={() => setShowCart(false)} className="border-2 border-red-700 text-red-700">
                            Close
                        </div>
                    </div>
                    <div className=" border-b-2 border-b-white w-full" />
                    <div className="flex flex-col items-center gap-4 w-full">
                    {
                        productCart?.map(p => 
                        <div key={p.id} className="h-14 overflow-clip flex w-full gap-1">
                            <img className="w-1/5 h-14 object-fit left-0 relative " src={p.thumbnail} />
                            <p className="overflow-clip w-3/5">{p.title}</p>
                            <div className="w-1/5">
                                <p>à {p.price}kr</p>
                                <div className="flex justify-around text-2xl">

                                    <button onClick={() => removeProduct(p.id)}>-</button>
                                    <p>{cart.find(item => item.id == p.id)?.amount}</p>
                                    <button onClick={() => addProduct(p.id)}>+</button>
                                </div>

                            </div>
                        </div>)
                    }
                    </div>
                    <div className="mt-4">
                        Total: {productCart?.reduce((sum, p) => sum += (cart.find(item => item.id == p.id)?.amount || 0) * p.price, 0)} kr
                    </div>
                </div>
                :
                <></>
            }

        </div>
    );
}