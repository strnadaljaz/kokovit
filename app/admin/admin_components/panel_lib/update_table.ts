import { createClient } from "@/lib/supabase/client";
import { Product } from "@/app/kolekcija/page";

const supabase = createClient();

const updateCollection = async (collection: Product[]) => {
    const { data, error } = await supabase
        .from('merch')
        .delete();

    if (error)
        console.error(error);

    for (let product of collection) {
        const { data, error } = await supabase
            .from('merch')
            .insert({ name: product.name, img: product.img, sizes: product.sizes, price: product.price });

        if (error)
            console.error(error);
    }
}

const updateStock = async (stock: boolean, id: number) => {
    const { data, error } = await supabase
        .from('products')
        .update({ in_stock: stock })
        .eq('id', id);

    if (error) {
        console.error(error);
    }
}

const updatePrice = async (price: string | undefined, id: number) => {
    const { data, error } = await supabase
        .from('products')
        .update({ price: price })
        .eq('id', id);

    if (error) {
        console.error(error);
    }
}

const updateDiscounts45 = async (kom45: number[], price45: string[], shipping: string[]) => {
    const { data, error } = await supabase
        .from('discounts')
        .delete()
        .eq('product_id', 1);

    if (error) {
        console.error(error);
    }

    for (let i = 0; i < kom45.length; ++i) {
        const { data, error } = await supabase
            .from('discounts')
            .insert({ quantity: kom45[i], price: price45[i], shipping: shipping[i], product_id: 1 });

        if (error) {
            console.error(error);
        }
    }
}

const updateDiscounts70 = async (kom70: number[], price70: string[], gratisKom: number[]) => {
    const { data, error } = await supabase
        .from('discounts')
        .delete()
        .eq('product_id', 2);

    if (error) {
        console.error(error);
    }

    for (let i = 0; i < kom70.length; ++i) {
        const { data, error } = await supabase
            .from('discounts')
            .insert({ quantity: kom70[i], price: price70[i], free_quantity: gratisKom[i], product_id: 2 });

        if (error) {
            console.error(error);
        }
    }
}

export { updateStock, updatePrice, updateDiscounts45, updateDiscounts70, updateCollection };
