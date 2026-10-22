import { discount, price } from './pricing';

export function subtotal(items: { amount: number }[]): number {
  return items.reduce((sum, item) => sum + price(item.amount), 0);
}

export function checkout(items: { amount: number }[], coupon?: number): number {
  return coupon ? discount(subtotal(items) / 100, coupon) : subtotal(items);
}
