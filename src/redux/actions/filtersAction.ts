export const setSortBy = (sortType: string) => {
    return {
        type: "SET-SORT-BY",
        payload: sortType
    } as const
}

export const setCategory = (catIndex: string) => {
    return {
        type: "SET-CATEGORY",
        payload: catIndex
    } as const
}