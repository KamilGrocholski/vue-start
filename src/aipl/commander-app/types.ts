export type Item = {
    id: number
    name: string
    imageUrl: string
    price: number
}

export type CartItem = {
    item: Item
    quantity: number
}
