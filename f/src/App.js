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
import CC from './pages/npages/CC'
import CT from './pages/npages/CT'
import GG from './pages/npages/GG'
import GL from './pages/npages/GL'
import TI from './pages/npages/TI'
import CO from './pages/npages/CO'

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
            <Route path='gg' element={<GG />} />
            <Route path='cc' element={<CC />} />
            <Route path='ct' element={<CT />} />
            <Route path='gl' element={<GL />} />
            <Route path='ti' element={<TI />} />
            <Route path='co' element={<CO />} />
          </Route>
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <div id='footer-box'>
          <footer>
            <a href='https://www.linkedin.com/in/ben-v-me/'>Linked In</a>
            <a href='https://github.com/bjv753'>GitHub</a>
          </footer>
        </div>
      </div>
    </Router>
  )
}

export default App
