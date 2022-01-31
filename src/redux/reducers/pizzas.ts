import { setPizzasAC } from "../actions/pizzasAction"

export type PizzasType = {
    id: number
    imageUrl: string
    name: string
    types: Array<number>
    sizes: Array<number>
    price: number
    category: number
    rating: number
}


type InitPizzaTypes = {
    items: Array<PizzasType>
    isLoaded: boolean
}

type GeneralType = ReturnType<typeof setPizzasAC>

const initState = {
    items: [],
    isLoaded: false
}

const pizzasReducer = (state: InitPizzaTypes = initState, action: GeneralType) => {
    switch (action.type) {
        case "SET-PIZZAS": {
            return { ...state, items: action.payload }
        }
        default:
            return state
    }
}

export default pizzasReducer