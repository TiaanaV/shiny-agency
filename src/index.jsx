import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Survey from './pages/Survey'
import Header from './components/Header/Header.jsx'
import Error from './components/Header/Error.jsx'
import Results from './components/Header/Results.jsx'
import Freelancers from './components/Header/Freelancers.jsx'
import { createGlobalStyle } from 'styled-components'
import colors from './utils/style/colors.js'

const GlobalStyle = createGlobalStyle`
  div{
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
    background-color:${colors.backgroundLight}
   }
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="/freelancers" element={<Freelancers />} />
        <Route path="/results" element={<Results />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
