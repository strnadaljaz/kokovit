export interface ProductDraft {
    _tempId?: string;
    name: string;
    basePrice: number | "";
    inStock: boolean;
    image: string;
    discounts: DiscountDraft[];
}

export interface DiscountDraft {
    id?: number;
    quantity: number | "";
    price: number | "";
    freeQuantity?: number;
    shipping?: number;
}
