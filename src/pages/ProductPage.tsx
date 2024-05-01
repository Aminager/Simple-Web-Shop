import { useParams } from "react-router-dom";
import { getProduct } from "../utils/API";
import { ProductParams, ProductType } from "../utils/types";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { useCart } from "../hooks/useCart";

export const ProductPage = () => {
    var { id } = useParams<keyof ProductParams>() as ProductParams; 
    const { cart, showCart, setCart, setShowCart} = useCart();

    const [p, setP] = useState<ProductType>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getProduct(parseInt(id))
        .then(setP)
        .then(() =>setLoading(false));
    }, [])


    return(
        <div>
            <Header cart={cart} showCart={showCart} setCart={setCart} setShowCart={setShowCart}/>
            {loading || !p ? 
                <div>Loading...</div>
                :
                <div className="flex flex-col justify-center items-center">
                    <div className="flex sm:flex-col md:flex-row justify-center items-center">
                        {
                            p?.images.map(i => <img key={i} className="sm:w-[80vw] md:w-[20vw]" alt={i} src={i} />)
                        }
                    </div>
                    <p className="text-6xl">{p?.title}</p>
                    <p className="text-2xl">{p?.brand}</p>
                    <p className="text-xl flex flex-wrap overflow-visible w-1/2">{p?.description}</p>
                    <div className="flex items-center gap-8">
                        <p className="text-3xl line-through">{p?.price}kr</p>
                        <p className="text-3xl">{Math.floor(p?.price * (100-p?.discountPercentage) / 100)}kr</p>
                    </div>
                    <p className="text-2xl">{p?.rating} / 5</p>
                </div>
            }
        </div>
    );
}