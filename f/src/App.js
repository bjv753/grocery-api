
import { BrowserRouter as Router, Link, Route, Routes, Navigate } from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import About from './pages/About'   
import Contact from './pages/Contact'
import CC from './pages/npages/CC'
import LMNO from './pages/npages/LMNO'
import RS from './pages/npages/RS'
import TA from './pages/npages/TA'
import UA from './pages/npages/UA'

const App = () => {
  return (
    <Router>
      <div className="app">
      <nav className='links'>
             <Link to="/about" className='link'>About</Link>
             <Link to="/portfolio" className='link'>Portfolio</Link>
             <Link to="/contact" className='link'>Contact</Link>
      </nav>
        <Routes>
        <Route path="/" element={<Navigate to="/about" />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/portfolio' element={<Portfolio/>}>
              <Route path='rs' element={<RS/>}/>
              <Route path='cc' element={<CC/>}/>
              <Route path='lmno' element={<LMNO/>}/>
              <Route path='ta' element={<TA/>}/>
              <Route path='ua' element={<UA/>}/>
          </Route>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
