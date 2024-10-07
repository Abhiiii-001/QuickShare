import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Upload from './pages/Upload'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'
import Recieve from './pages/Recieve'

function App() {

  return (
      <div className='bg-gray-900 w-screen h-screen overflow-hidden'>
        <div className='w-10/12 mx-auto '>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/upload' element={<Upload/>}/>
          <Route path='/recieve' element={<Recieve/>}/>
          <Route path='/contact-us' element={<ContactUs/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>
        </Routes>
      </div>
      </div>
  )
}

export default App
