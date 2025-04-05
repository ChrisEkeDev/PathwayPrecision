import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import './App.css'

function App() {


  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<About/>}/>
        <Route path="/" element={<Contact/>}/>
      </Routes>
      <Footer />
    </main>
  )
}

export default App
