import React, { useState } from 'react';

type CategoriesProps = {
    items: Array<string>
    onClickItem: (catIndex: number | null) => void
}


const Categories = React.memo(({ items, onClickItem }: CategoriesProps) => {
    const [active, setActive] = useState<number | null>(null)

    const onClickSelectItem = (catIndex: number | null) => {
        setActive(catIndex)
        onClickItem(catIndex)
    }

    return (
        <div className="categories">
            <ul>
                <li onClick={() => onClickSelectItem(null)} className={active === null ? "active" : ''}>Все</li>
                {items.map((name, index) => {
                    return <li className={active === index ? 'active' : ''} onClick={() => onClickSelectItem(index)}
                        key={`${name}_${index}`}>{name}</li>
                })}
            </ul>
        </div>
    );
})


// class Categories extends React.Component<CategoriesProps> {
//     state = {
//         activeItem: null
//     }

//     onSelectItem = (index: number) => {
//         this.setState({
//             activeItem: index
//         })
//     }

//     render(): React.ReactNode {
//         const { items, onClickItem } = this.props
//         return (
//             <div className="categories">
//                 <ul>
//                     <li className="active">Все</li>
//                     {items.map((name, ind) => {
//                         return <li className={this.state.activeItem === ind ? 'active' : ''} onClick={() => this.onSelectItem(ind)}
//                             key={`${name}_${ind}`}>{name}</li>
//                     })}
//                 </ul>
//             </div>
//         )
//     }
// }

export default Categories