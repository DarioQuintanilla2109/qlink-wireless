import logo from './logo.svg'
import './App.css'
import { Topnav } from '../src/components/Topnav'
import { Navbar } from '../src/components/Navbar'
import { PhoneDisplay } from '../src/components/PhoneDisplay'
import { Specifications } from '../src/components/Specifications'
import { Footer } from '../src/components/Footer'

function App() {
  return (
    <>
      <Topnav />
      <Navbar />
      <PhoneDisplay />
      <Specifications />
      <Footer />
    </>
  )
}

export default App
