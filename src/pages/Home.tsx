import React, { useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Categories, SortPopup, PizzaBlock } from '../Components/index'
import { setCategoryAC } from "../redux/actions/filtersAction";
import { AppStateType } from "../redux/store";

export type PizzasType = {
    id?: number
    imageUrl: string
    name: string
    types: Array<number>
    sizes: Array<number>
    price: number
    category: number
    rating: number
}

const categoryNames = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]
const sortPopupItems = [
    { name: "популярности", type: "popular" },
    { name: "цене", type: "price" },
    { name: "алфавиту", type: "alphabet" }]


const Home = () => {
    const items = useSelector(({ pizzas }: AppStateType) => pizzas.items)
    const dispatch = useDispatch()
    const onClickChangeCategories = useCallback((catIndex: number | null) => {
        dispatch(setCategoryAC(catIndex))
    }, [])

    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickItem={onClickChangeCategories}
                    items={categoryNames} />
                <SortPopup items={sortPopupItems} />
            </div>

            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items.map(obj => {
                    return <PizzaBlock key={obj.id}
                        {...obj}
                    // imageUrl={obj.imageUrl}
                    // name={obj.name}
                    // types={obj.types}
                    // sizes={obj.sizes}
                    // price={obj.price}
                    // category={obj.category}
                    // rating={obj.rating} 
                    />
                })}
            </div>
        </div>
    )
}

export default Home;