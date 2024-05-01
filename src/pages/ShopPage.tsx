import { Header } from "../components/Header";
import { ProductGallery } from "../components/ProductGallery";
import { SortingBanner } from "../components/SortingBanner";
import { getPageinatedProducts } from "../utils/API";
import { CategoryType } from "../utils/types";
import { ProductPageChooser } from "../components/ProductPageChooser";
import { useProducts } from "../hooks/useProducts";
import { usePages } from "../hooks/usePages";
import { DEFAULT_PRODUCT_LIMIT } from "../utils/constants";
import { useCart } from "../hooks/useCart";

export async function productLoader () {
    const res = await getPageinatedProducts();
    return res;
}

const sortOptions: CategoryType[] = [
    {label: "Sorting", value: ""},
    {label: "Price", value:"price"}, 
    {label: "Availability", value:"availability"}, 
    {label: "Discount", value: "discountPercentage"}, 
    {label: "Brand", value: "brand"}, 
    {label: "Rating", value: "rating"}
]

export const ShopPage = () => {
    const { shownProducts, states, setStates } = useProducts();
    const { currentPage, pages, setCurrentPage } = usePages(setStates.setShownProducts);
    const { cart, showCart, setCart, setShowCart} = useCart();

    return (
        <div>
            <Header cart={cart} showCart={showCart} setCart={setCart} setShowCart={setShowCart}/>
            <SortingBanner 
                setSearchInput={setStates.setSearch} 
                sortOptions={sortOptions} 
                sortOption={states.sortOption} 
                setSortOption={setStates.setSortOption} 
                ascending={states.asc} 
                setAscending={setStates.setAsc}/>
            <ProductGallery products={shownProducts} cart={cart} setCart={setCart} />
            {shownProducts.length < DEFAULT_PRODUCT_LIMIT ? <></> :<ProductPageChooser currentPage={currentPage} pages={pages} setCurrentPage={setCurrentPage} />}
        </div>
    );
    
}