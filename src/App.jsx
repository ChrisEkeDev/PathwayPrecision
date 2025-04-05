import { Switch, Route } from 'react-router-dom'
import ScrollToTop from './hooks/ScrollToTop'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Services from './pages/services/Services'
import Contact from './pages/contact/Contact'
import './App.scss'

function App() {


  return (
    <main>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/services"><Services /></Route>
        <Route exact path="/contact"><Contact /></Route>
      </Switch>
      <Footer />
    </main>
  )
}

export default App
