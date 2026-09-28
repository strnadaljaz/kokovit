export interface CartItem {
    id: string;
    productId: number;
    productName: string;
    image: string;
    quantity: number;
    unitPrice: number;

    isPromotion: boolean;
    promotionLabel?: string;
    freeQuantity?: number;
    shipping?: number;
}
