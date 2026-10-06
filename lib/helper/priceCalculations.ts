import { CartItem } from "../cart/CartItem";
import { Product } from "@/Context/ProductsContext";

export function calculateFreeQuantity(item: CartItem, products: Product[]): number {
    let freeQuantity = 0;

    const product = products.find(p => p.id === item.productId);
    let quantity = item.quantity;

    if (product) {
        const discounts = [...product.discounts].sort((a, b) => b.quantity - a.quantity);

        for (const discount of discounts) {
            const total = Math.floor(quantity / discount.quantity);

            if (total > 0) {
                quantity %= discount.quantity;

                if (discount.freeQuantity)
                    freeQuantity += total * discount.freeQuantity;
            }
        }
    }

    return freeQuantity;
}

export function calculateTotalPrice(items: CartItem[], products: Product[]): number {
    let totalPrice = 0;

    for (const item of items) {
        totalPrice += calculateTotalItemPrice(item, products);
    }

    return totalPrice;
}

export function calculateTotalShipping(items: CartItem[], products: Product[]): number {
    let totalShipping = 0.0;

    const product = products.find(p => p.name === "45l");

    for (const item of items) {
        if (item.productId === product?.id && item.quantity <= 4) {
            if (product.discounts[0].shipping)
                totalShipping += product.discounts[0].shipping;
        }
    }

    return totalShipping;
}

export function calculateTotalItemPrice(item: CartItem, products: Product[]): number {
    let totalPrice = 0.0;

    const product = products.find(p => p.id === item.productId);
    let quantity = item.quantity;

    if (product) {
        const discounts = [...product.discounts].sort((a, b) => b.quantity - a.quantity);
        for (const discount of discounts) {
            if (Math.floor(quantity / discount.quantity) > 0) {
                totalPrice = (discount.price / discount.quantity) * quantity;
                break;
            }
        }
    }

    if (totalPrice === 0.0 && product)
        totalPrice = quantity * product?.basePrice;

    return totalPrice;
}
