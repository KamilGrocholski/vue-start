import { defineStore } from 'pinia'

import type { CartItem } from '../types'

export const useCartStore = defineStore('cart', {
    state: () => ({
        cartItems: [] as CartItem[]
    }),
    actions: {
        addItem(item: CartItem): void {
            this.cartItems.unshift(item)
        },
        removeItem(itemId: CartItem['item']['id']): void {
            this.cartItems = this.cartItems.filter((cartItem) => cartItem.item.id !== itemId)
        },
        changeQuantity(itemId: CartItem['item']['id'], value: number): void {
            const cartItem = this.cartItems.find((cartItem) => cartItem.item.id === itemId)

            if (!cartItem) {
                return
            }

            cartItem['quantity'] = value
        },
        reset(): void {
            this.cartItems = []
        }
    }
})
