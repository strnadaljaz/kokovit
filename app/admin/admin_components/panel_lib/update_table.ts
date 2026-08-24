import { createClient } from "@/lib/supabase/client";

const supabase = createClient();

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

export { updateStock, updatePrice };
