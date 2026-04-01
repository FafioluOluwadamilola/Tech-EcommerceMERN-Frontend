import './styles/App.css'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Header from './components/Header'  
import Hero from './components/Hero'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'


function App() {

  return (
   <BrowserRouter>

    <Header />

    <Hero />

     <Routes>
       <Route path="/signup" element={<SignUp />} />
       <Route path='/about' element={<About />} />
     </Routes>

    <Footer />
    
   </BrowserRouter>
  )
}

export default App
