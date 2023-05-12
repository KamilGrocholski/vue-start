import { defineStore } from 'pinia'

import items from '../data/items'
import type { CartItem } from '../types'

const fakeData = items.map((f) => {
    return {
        item: f,
        quantity: 1
    }
})

export const useCartStore = defineStore('cart', {
    state: () => ({
        cartItems: fakeData as CartItem[]
    }),
    actions: {
        addItem(item: CartItem): void {
            const foundIndex = this.cartItems.findIndex((i) => i.item.id === item.item.id)
            console.log(foundIndex)
            if (foundIndex >= 0) {
                return
            }
            this.cartItems.unshift(item)
        },
        removeItem(itemId: CartItem['item']['id']): void {
            const foundIndex = this.cartItems.findIndex((i) => i.item.id === itemId)
            if (foundIndex < 0) {
                return
            }
            this.cartItems.splice(foundIndex, 1)
        },
        changeQuantity(itemId: CartItem['item']['id'], value: number): void {
            if (value < 1) {
                return
            }

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
