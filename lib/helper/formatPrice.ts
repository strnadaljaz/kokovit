export function formatPrice(price?: number): string {
    if (!price) return "error"
    return price.toLocaleString('sl-SI', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }) + '€';
}
