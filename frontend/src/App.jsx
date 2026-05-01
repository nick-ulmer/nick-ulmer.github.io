import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import GameDev from './pages/GameDev'

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gamedev" element={<GameDev />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App