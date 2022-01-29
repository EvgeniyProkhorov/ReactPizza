import React, { useState } from "react";
import { PizzasType } from "../pages/Home";


const PizzaBlock = (pizzas: PizzasType) => {
    const [activeType, setActiveType] = useState(pizzas.types[0])
    const [activeSize, setActiveSize] = useState(pizzas.sizes[0])
    const availableType = ["тонкое", "традиционное"]
    const availableSize = [26, 30, 40]

    const onClickSetActiveType = (index: number) => {
        setActiveType(index)
    }
    const onClickSetActiveSize = (size: number) => {
        setActiveSize(size)
    }

    console.log(pizzas)
    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={pizzas.imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{pizzas.name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {/* {pizzas.types.map((name,index)=>{
                        return <li key={`${name}_${index}`}
                        onClick={()=> setTypes(index)}
                            className={types === index ? "active" : ""}>{types === 0 ? 'тонкое' : "традиционное"}</li>
                    })} */}
                    {availableType.map((types, index) => <li key={`${types}_${index}`}
                        className={!pizzas.types.includes(index) ? "disabled" : "" || activeType === index ? "active" : ""}
                        onClick={() => onClickSetActiveType(index)}>{types}</li>)}
                </ul>
                <ul>
                    {availableSize.map((size, index) => {
                        return <li key={`${size}_${index}`}
                            onClick={() => onClickSetActiveSize(size)}
                            className={!pizzas.sizes.includes(size) ? "disabled" : "" || activeSize === size ? "active" : ""}>{`${size} см.`}</li>
                    })}
                    {/* <li className="active">26 см.</li>
                    <li>30 см.</li>
                    <li>40 см.</li> */}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {pizzas.price} ₽</div>
                <div className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                </div>
            </div>
        </div>
    )
}

export default PizzaBlock