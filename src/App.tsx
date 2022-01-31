import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom'
import { Header } from './Components'
import { Home, Cart } from './pages'
import { useSelector, useDispatch } from 'react-redux'
import { setPizzasAC } from './redux/actions/pizzasAction';
import { AppStateType } from './redux/store';

const App = () => {
  const dispatch = useDispatch()
  const {items} = useSelector(({ pizzas, filters }: AppStateType) => {
    return {
      items: pizzas.items,
      sortBy: filters.sortBy
    }
  })

  useEffect(() => {
    axios('http://localhost:3000/db.json')
      .then(({ data }) => {
        dispatch(setPizzasAC(data.pizzas))
      })
  }, [])

  return (
    <div className="wrapper">

      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home items={items} />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  )
}

export default App


// class App extends React.Component<AppType> {
//   componentDidMount() {
//     axios.get('http://localhost:3000/db.json')
//       .then(({ data }) => {
//         this.props.setPizzas(data.pizzas)
//       })
//   }

//   render() {
//     return (
//       <div className="wrapper">

//         <Header />
//         <div className="content">
//           <Routes>
//             <Route path="/" element={<Home items={this.props.items} />} />
//             <Route path="cart" element={<Cart />} />
//           </Routes>
//         </div>
//       </div>

//     );
//   }
// }

// type mapStateType = {
//   items: Array<PizzasType>
// }
// type mapDispatchType = {
//   setPizzas: (items: Array<PizzasType>) => void
// }

// type AppType = mapStateType & mapDispatchType

// const mapStateToProps = (state: AppStateType): mapStateType => {
//   return {
//     items: state.pizzas.items
//   }
// }
// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchType => {
//   return {
//     setPizzas: (items) => dispatch(setPizzasAC(items))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
