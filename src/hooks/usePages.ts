import { useEffect, useState } from "react"
import { getPageinatedProducts } from "../utils/API";
import { DEFAULT_PAGES, DEFAULT_PRODUCT_LIMIT, TOTAL_PRODUCTS } from "../utils/constants";
import { ProductType } from "../utils/types";


export const usePages = (setShownProducts : (products: ProductType[]) => void) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pages, setPages] = useState<number[]>(DEFAULT_PAGES);

    useEffect(() => {
        async function loadPage() {
            getPageinatedProducts(currentPage, DEFAULT_PRODUCT_LIMIT)
            .then(products => {
                const newProducts: ProductType[] = products;
                setShownProducts(newProducts)
            });
        }
        loadPage()
        if (currentPage > 2) {
            if ((currentPage) * DEFAULT_PRODUCT_LIMIT  < TOTAL_PRODUCTS ) {
                setPages([currentPage - 1, currentPage, currentPage + 1])
            }
        } else {
            setPages(DEFAULT_PAGES)
        }

    }, [currentPage])

    return {currentPage, pages, setCurrentPage}
}