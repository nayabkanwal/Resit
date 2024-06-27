import "./App.css"
import HomePage from "./home/HomePage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SinglePage from "./components/watch/SinglePage"
import Header from "./components/header/Header"
import Login from './components/Login'
import Register from './components/Register'
import Footer from "./components/footer/Footer"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>

          {/* <Route path="/" element={ }></Route> */}
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route exact path='/home' element={<HomePage />} />
          <Route path='/singlepage/:id' element={<SinglePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
