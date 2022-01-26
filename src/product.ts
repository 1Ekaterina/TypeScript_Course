import { PurchaseContext } from './purchase-context.js'

export abstract class Product {
  public price: number

  protected constructor(price: number) {
    this.price = price
  }

  abstract getProductDescription(): string

  getDiscountPrice(context: PurchaseContext): number {
    return this.price - this.calculateDiscount(context)
  }

  protected calculateDiscount(context: PurchaseContext): number {
    return this.price * (context.user.clientLevel * 10) / 100
  }
}
