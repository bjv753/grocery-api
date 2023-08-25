import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter'
import Counter from './components/Counter'
import GradientGenerator from './components/GradientGenerator'
import GroceryList from './components/GroceryList'
import Timer from './components/Timer'
import CheckOut from './components/CheckOut'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <nav className='links'>
          <Link to='/about' className='link'>
            About
          </Link>
          <Link to='/portfolio' className='link'>
            Portfolio
          </Link>
          <Link to='/contact' className='link'>
            Contact
          </Link>
        </nav>
        <Routes>
          <Route path='/' element={<Navigate to='/about' />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />}>
            <Route path='/portfolio' element={<Navigate to='/portfolio/gradient-generator' />} />
            <Route path='gradient-generator' element={<GradientGenerator />} />
            <Route path='currency-converter' element={<CurrencyConverter />} />
            <Route path='counter' element={<Counter />} />
            <Route path='grocery-list' element={<GroceryList />} />
            <Route path='timer' element={<Timer />} />
            <Route path='check-out' element={<CheckOut />} />
          </Route>
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <div id='footer-box'>
          <footer>
            <a href='https://www.linkedin.com/in/ben-v-me/'>LinkedIn</a>
            <a href='https://github.com/bjv753'>GitHub</a>
          </footer>
        </div>
      </div>
    </Router>
  )
}

export default App
