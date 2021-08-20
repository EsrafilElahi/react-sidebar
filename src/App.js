import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import Home from './pages/Home'
import Team from './pages/Team'
import News from './pages/News'
import AboutUs from './pages/AboutUs'
import ContactUS from './pages/ContactUS'
import './App.css'


function App() {

  return (
    <div>

      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/products' component={Products} />
        <Route path='/team' component={Team} />
        <Route path='/news' component={News} />
        <Route path='/about-us' component={AboutUs} />
        <Route path='/contact-us' component={ContactUS} />
      </Switch>

    </div>
  )
}

export default App
