export const setSortBy = (sortType: string) => {
    return {
        type: "SET-SORT-BY",
        payload: sortType
    } as const
}

export const setCategoryAC = (catIndex: number | null) => {
    return {
        type: "SET-CATEGORY",
        payload: catIndex
    } as const
}