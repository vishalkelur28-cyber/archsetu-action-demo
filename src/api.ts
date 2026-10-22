import { checkout } from './cart';

export function handleCheckout(body: { items: { amount: number }[]; coupon?: number }): { total: number } {
  return { total: checkout(body.items, body.coupon) };
}
