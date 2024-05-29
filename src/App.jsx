import { BrowserRouter , Routes , Route } from 'express'

import './App.css'

import { Home } from './pages/Home'
// import { Projects } from './pages/Projects'
// import { About } from './pages/About'

function App() {
  
  return (
    <BrowserRouter>
    <>
      <Routes>

        <Route path="/"         element={ <Home/>     }/>
        {/* <Route path="/projects" element={ <Projects/> }/>
        <Route path="/about"    element={ <About/>    }/> */}
  
      </Routes>
    </>
    </BrowserRouter>
  )
}

export default App
