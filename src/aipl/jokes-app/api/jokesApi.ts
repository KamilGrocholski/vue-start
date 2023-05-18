export const JOKE_URL = 'https://api.chucknorris.io/jokes/random' as const

export type Joke = {
    value: string
    id: string
    url: string
}

export type JokesPair = {
    joke1: Joke
    joke2: Joke
}

export type JokeVote = {
    votedAt: number
    for: Joke
    against: Joke
}

export type CastVoteData = {
    for: Joke
    against: Joke
}

export async function getRandomJoke(): Promise<Joke> {
    const res = await fetch(JOKE_URL)

    return res.json()
}

export async function getRandomJokesPair(): Promise<JokesPair> {
    const joke1 = await getRandomJoke()
    const joke2 = await getRandomJoke()

    return {
        joke1,
        joke2
    }
}

export async function castVote(data: CastVoteData): Promise<void> {
    console.log('fake voted')
    console.log(data)
}
