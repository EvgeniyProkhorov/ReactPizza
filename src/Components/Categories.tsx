import React, { useState } from 'react';

type CategoriesProps = {
    items: Array<string>
    onClickItem: () => void
}


const Categories = ({ items, onClickItem }: CategoriesProps) => {
    const [active, setActive] = useState<number | null>(null)

    const onClickSelectItem = (index: number) => {
        setActive(index)
    }

    return (
        <div className="categories">
            <ul>
                <li onClick={() => setActive(null)} className={active === null ? "active" : ''}>Все</li>
                {items.map((name, index) => {
                    return <li className={active === index ? 'active' : ''} onClick={() => onClickSelectItem(index)}
                        key={`${name}_${index}`}>{name}</li>
                })}
            </ul>
        </div>
    );
}


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