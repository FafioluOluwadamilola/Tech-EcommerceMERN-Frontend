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


function App() {

  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/signup" element={<SignUp />} />
        <Route path='/login' element={<Login />} /> */}
        <Route path='/about' element={<About />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App
