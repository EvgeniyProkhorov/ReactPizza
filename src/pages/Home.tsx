import React from "react";
import { Categories, SortPopup, PizzaBlock } from '../Components/index'

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

type HomeProps = {
    items: Array<PizzasType>
}


const Home = ({ items }: HomeProps) => {
    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickItem={() => { }}
                    items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]} />
                <SortPopup items={[
                    { name:"популярности", type: "popular"},
                    { name: "цене", type: "price"},
                    { name: "алфавиту", type: "alphabet"}]} />
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