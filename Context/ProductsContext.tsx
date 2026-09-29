"use client";

import { createClient } from "@/lib/supabase/client";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface Discount {
    id: number;
    quantity: number;
    price: number;
    productId: number;
    freeQuantity?: number;
    shipping?: number;
}

interface Product {
    id: number;
    name: string;
    inStock: boolean;
    basePrice: number;
    image: string;
    discounts?: Discount[];
}

export interface ProductsContextValue {
    products: Product[];
    addProduct: (product: Product) => void;
    removeProduct: (id: number) => void;
    changeProduct: (product: Product) => void;
}

const ProductsContext = createContext<ProductsContextValue | null>(null);

export function ProductsProvider({ children }: { children: ReactNode }) {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function getProductData() {
            const supabase = createClient();

            const { data: productData, error: productError } = await supabase
                .from("products")
                .select("id, name, price, in_stock, img");

            if (productError) {
                console.error(productError);
                return;
            }

            const { data: discountData, error: discountError } = await supabase
                .from("discounts")
                .select("id, quantity, free_quantity, price, shipping, product_id")
                .order("product_id", { ascending: true });

            if (discountError) {
                console.error(discountError);
                return;
            }

            const discountsByProduct = new Map<number, Discount[]>();
            for (const d of discountData ?? []) {
                const list = discountsByProduct.get(d.product_id) ?? [];
                list.push({
                    id: d.id,
                    quantity: d.quantity,
                    price: d.price,
                    productId: d.product_id,
                    freeQuantity: d.free_quantity ?? undefined,
                    shipping: d.shipping ?? undefined,
                });
                discountsByProduct.set(d.product_id, list);
            }

            const products: Product[] = (productData ?? []).map((p) => ({
                id: p.id,
                name: p.name,
                inStock: p.in_stock,
                basePrice: p.price,
                image: p.img,
                discounts: discountsByProduct.get(p.id) ?? [],
            }));

            setProducts(products);
        }

        getProductData();
    }, []);

    const addProduct = (product: Product) => {
        setProducts(prev => [...prev, product]);
    };

    const removeProduct = (id: number) => {
        setProducts(prev => prev.filter(p => p.id !== id));
    };

    const changeProduct = (product: Product) => {
        setProducts(prev =>
            prev.map(i => (i.id === product.id ? product : i))
        );
    };

    return (
        <ProductsContext.Provider
            value={{ products, addProduct, removeProduct, changeProduct }}
        >
            {children}
        </ProductsContext.Provider>
    );
}

// Small quality-of-life hook so consumers don't need the null-check everywhere
export function useProducts() {
    const ctx = useContext(ProductsContext);
    if (!ctx) {
        throw new Error("useProducts must be used inside <ProductsProvider>");
    }
    return ctx;
}
