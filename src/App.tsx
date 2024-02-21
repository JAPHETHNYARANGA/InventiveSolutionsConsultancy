import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar/navbar'
import Footer from './components/Footer/footer'

function App() {
 

  return (
    <>
    <Navbar />
        <Routes>
          <Route path="/" element={<HomePage  />} />
          <Route path="/products" element={<HomePage />} />
          <Route path="/about" element={<HomePage  />} />
       </Routes>

    <Footer />   
    </>
  )
}

export default App
