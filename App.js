import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Template from './pages/Template'
import NavBar from './pages/NavBar'

const App = () => {
    return(
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<NavBar/>}>
        <Route index element={<Home/>}/>
        <Route path="template" element={<Template/>}/>
        </Route>
        </Routes>
        </BrowserRouter>

        </>
    )
}
export default App