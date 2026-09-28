export function formatPrice(price: number): string {
    return price.toLocaleString('sl-SI', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }) + '€';
}
