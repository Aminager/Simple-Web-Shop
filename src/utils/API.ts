import { DEFAULT_PRODUCT_LIMIT } from "./constants";

export  function getAllProducts () {
    const response = fetch('https://dummyjson.com/products?limit=100')
    .then(res => res.json())
    .then(res => res.products)
    .catch(err => {
        console.log(err)
        return []
    });
    return response
}

export function getPageinatedProducts(page: number = 1, limit: number = DEFAULT_PRODUCT_LIMIT) {
    const url = `https://dummyjson.com/products?limit=${limit}&skip=${page == 1 ? 0 : (page - 1) * limit}`
    const response = fetch(url)
    .then(res => res.json())
    .then(res => res.products)
    .catch(err => {
        console.log(err)
        return []
    });
    return response
}

export function getProduct(id: number) {
    const url = `https://dummyjson.com/products/${id}`
    const response = fetch(url)
    .then(res => res.json())
    .catch(err => {
        console.log(err)
        return []
    });
    return response
}