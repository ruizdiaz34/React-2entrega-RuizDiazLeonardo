import { Cart, ItemDetailContainer } from './components'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { NavBar } from './components/NavBar/Navbar'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {CartContextProvider } from './context/CartContext'

export const App = () => {
  return (
<CartContextProvider>
  <BrowserRouter>
        <NavBar/>
      { <Routes>
        <Route path="/" element={<ItemListContainer/>}   />
        <Route path="/category/:category" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
        <Route path="/cart" element={<Cart/>}/>
        </Routes>}
    </BrowserRouter>
</CartContextProvider>
      
    
  )
}

