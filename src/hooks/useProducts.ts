import { useEffect, useState } from "react";
import { ProductType } from "../utils/types";
import { useLoaderData } from "react-router-dom";
import { selectSort } from "../utils/sortMethods";
import { DEFAULT_ASC, DEFAULT_SORT } from "../utils/constants";

type useProductsStatesType = {
    search: string, 
    sortOption: number, 
    asc: number, 
}

type useProductsSetStateType = {
    setSearch: (search: string) => void, 
    setSortOption:  (i: number) => void, 
    setAsc: (i: number) => void,
    setShownProducts: (products: ProductType[]) => void,
    setProducts: (products: ProductType[]) => void
}


export function useProducts() {
    const [products, setProducts] = useState<ProductType[]>(useLoaderData() as ProductType[]);
    const [shownProducts, setShownProducts] =  useState<ProductType[]>(products);
    const [searchInput, setSearchInput] = useState<string>("");
    const [sortOption, setSortOption] = useState<number>(DEFAULT_SORT);
    const [ascending, setAscending] = useState<number>(DEFAULT_ASC);

    useEffect(() => {
        const filtered = products.filter(p => 
            p.brand.toLowerCase().includes(searchInput.toLowerCase())
            || p.title.toLowerCase().includes(searchInput.toLowerCase())
            || p.description.toLowerCase().includes(searchInput.toLowerCase())
            || p.category.toLowerCase().includes(searchInput.toLowerCase())
        )
        if (sortOption == 0) {
            setShownProducts(filtered.sort((a,b) => selectSort(DEFAULT_SORT)(a,b,DEFAULT_ASC)))
        } else {
            setShownProducts(filtered.sort((a,b) => selectSort(sortOption)(a,b,ascending)))
        }
    }, [sortOption, ascending, searchInput]);

    var states: useProductsStatesType = {search: searchInput, sortOption: sortOption,  asc: ascending, }
    var setStates: useProductsSetStateType = {setSearch: setSearchInput, setSortOption: setSortOption, setAsc: setAscending, setShownProducts: setShownProducts, setProducts: setProducts}

    return {shownProducts, states, setStates}
}