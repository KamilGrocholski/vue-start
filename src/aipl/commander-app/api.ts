type State = 'loading' | 'error' | 'success' | 'refetching' | null

type FetchFn<TInput, TOutput> = (input: TInput) => Promise<TOutput>

export class Query<TInput, TOutput> {
    private _fetchFn: FetchFn<TInput, TOutput>
    private _state: State
    private _error: unknown | null

    constructor(fetchFn: FetchFn<TInput, TOutput>) {
        this._fetchFn = fetchFn
        this._state = null
        this._error = null
    }

    async useQuery(input: TInput): Promise<TOutput | null> {
        this._reset()

        this._state = 'loading'

        try {
            const result = await this._fetchFn(input)

            this._state = 'success'

            return result
        } catch (error) {
            this._state = 'error'
            this._error = error

            return null
        }
    }

    private _reset(): void {
        this._error = null
        this._state = null
    }

    get state(): State {
        return this._state
    }

    get error(): typeof this._error {
        return this._error
    }
}

export async function getItems() {
    return (await fetch('./data/items.json')).json()
}
