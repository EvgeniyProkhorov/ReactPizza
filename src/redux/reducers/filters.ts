import { setSortBy } from "../actions/filtersAction"

type GeneralType = ReturnType<typeof setSortBy>

type InitFilterTypes = {
    category: number
    sortBy: string
}

const initialState = {
    category: 0,
    sortBy: "popular"
}

const filtersReducer = (state: InitFilterTypes = initialState, action: GeneralType) => {
    switch (action.type) {
        case "SET-SORT-BY": {
            return { ...state, sortBy: action.payload }
        }
        default:
            return state
    }
}



export default filtersReducer;