
export interface ProductType {
  "id": number,
  "title": string,
  "description": string,
  "price": number,
  "discountPercentage": number,
  "rating": number,
  "stock": number,
  "brand": string,
  "category": string,
  "thumbnail": string,
  "images": string[]
}

export interface CategoryType {
  "label": string,
  "value": string
}

export interface CartType {
  "id": number,
  "amount": number
}

export interface ProductParams {
    "id": string
}