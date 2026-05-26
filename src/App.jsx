import './styles/App.css'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import About from './pages/About'
import HomePage from './pages/HomePage'
import Header from './components/Header'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'
import ProtectedRoute from './components/ProtectedRoute'
import Profile from './pages/Profile'
import { CartProvider } from './context/CartContext'
import { UIProvider } from './context/UIContext'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import OrderSuccess from './pages/OrderSuccess'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'


function App() {

  return (
    <UIProvider>
      <CartProvider>
        <BrowserRouter>

          <Header />

          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/signup" element={<SignUp />} />
            <Route path='/login' element={<Login />} /> */}
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<ProductDetails />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />
            <Route
              path="/order-success"
              element={
                <ProtectedRoute>
                  <OrderSuccess />
                </ProtectedRoute>
              }
            />
          </Routes>

          <Footer />

        </BrowserRouter>
      </CartProvider>
    </UIProvider>
  )
}

export default App
