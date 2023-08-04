import { BrowserRouter as Router, Link, Route, Routes, Navigate } from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pagesContact'
import CC from './pages/npages/CC'
import LMNO from './pages/npages/LMNO'
import RS from './pages/npages/RS'
import GL from './pages/npages/GL'
import US from './pages/npages/UA'
import CO from './pages/npages/CO'

const App = () => {
      return (
            <ROuter>
                  <div id="app">
                        <nav id="links">
                              <Link to='/about' id="link">About</Link>
                              <Link to='/portfolio' id="link">Portfolio</Link>
                              <Link to='contact' id="link">Contact</Link>
                        </nav>
                        <Routes>
                              <Route path='/' element={<Navigate to='/about' />} />
                              <Route path='/about' element={<About/>} />
                              <Route path='/portfolio' element={<Portfolio/>} >
                                    <Route path='rs' element={<RS/>} />
                                    <Route path='cc' element={<CC/>} />
                                    <Route path='lmno' element={<LMNO/>} />
                                    <Route path='gl' element={<GL/>} />
                                    <Route path='ua' element={<UA/>} />
                                    <Route path='co' element={<CO/>} />
                              </Route>
                        </Routes>
                  </div>
            </ROuter>
      )
} 

export default App