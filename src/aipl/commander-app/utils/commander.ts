export abstract class Command<T> {
    abstract execute(state: T): T
    abstract undo(state: T): T
}

export class Commander<T> {
    state: T
    private _history: Stack<Command<T>>

    constructor(initialState: T) {
        this.state = initialState
        this._history = new Stack()
    }

    execute(command: Command<T>): void {
        this.state = command.execute(this.state)
        this._history.push(command)
    }

    undo(): void {
        const command = this._history.pop()

        if (!command) {
            return
        }

        this.state = command.undo(this.state)
    }
}

class Stack<T> {
    private _storage: UniLinkedList<T>

    constructor() {
        this._storage = new UniLinkedList()
    }

    push(value: T): void {
        this._storage.prepend(value)
    }

    pop(): T | undefined {
        return this._storage.unshift()
    }

    peek(): T | undefined {
        return this._storage.head?.value
    }

    get size(): number {
        return this._storage.size
    }
}

class UniNode<T> {
    value: T
    next: UniNode<T> | null

    constructor(value: T) {
        this.value = value
        this.next = null
    }

    static create<V>(value: V): UniNode<V> {
        return new UniNode(value)
    }
}

class UniLinkedList<T> {
    head: UniNode<T> | null
    tail: UniNode<T> | null
    private _size: number

    constructor() {
        this.head = this.tail = null
        this._size = 0
    }

    append(value: T): void {
        const newNode = UniNode.create(value)
        this._size++

        if (!this.tail) {
            this.tail = this.head = newNode
            return
        }

        this.tail.next = newNode
        this.tail = newNode
    }

    prepend(value: T): void {
        const newNode = UniNode.create(value)
        this._size++

        if (!this.head) {
            this.head = this.tail = newNode
            return
        }

        newNode.next = this.head
        this.head = newNode
    }

    unshift(): T | undefined {
        if (!this.head) {
            return undefined
        }

        const value = this.head.value

        this.head = this.head.next
        this._size--

        return value
    }

    get size(): number {
        return this._size
    }

    *[Symbol.iterator]() {
        let node = this.head
        while (node) {
            yield node
            node = node.next
        }
    }
}
