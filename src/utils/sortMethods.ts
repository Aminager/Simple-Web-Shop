import { ProductType } from "./types";

/**
 * Getter for sort methods with ratingSort as default value
 * @param i 
 * @returns compare method for array sort
 */
export function selectSort(i: number) {
    const sortMethods = [ratingSort, priceSort, availabilitySort, discountPercentageSort, brandSort, ratingSort]
    return sortMethods[i];
}

function priceSort(a: ProductType, b: ProductType, asc: number) {
    return asc == 0 ? a.price - b.price : b.price - a.price;
}

function discountPercentageSort(a: ProductType, b: ProductType, asc: number) {
    return asc == 0 ? a.discountPercentage - b.discountPercentage : b.discountPercentage - a.discountPercentage;
}

function ratingSort(a: ProductType, b: ProductType, asc: number) {
    return asc == 0 ? a.rating - b.rating : b.rating - a.rating;
}

function brandSort(a: ProductType, b: ProductType, asc: number) {
    return asc == 0 ? a.brand.localeCompare(b.brand) : b.brand.localeCompare(a.brand);
}

function availabilitySort(a: ProductType, b: ProductType, asc: number) {
    return asc == 0 ? a.stock - b.stock : b.stock - a.stock
}