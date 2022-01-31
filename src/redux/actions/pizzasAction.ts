import { PizzasType } from "../reducers/pizzas"

export const setPizzasAC = (items: Array<PizzasType>) => {
    return {
        type: "SET-PIZZAS",
        payload: items
    } as const
}