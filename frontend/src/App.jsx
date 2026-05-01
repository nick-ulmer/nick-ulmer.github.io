import { Alert, Box } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/portfolio/Portfolio'
import GameDevPortfolio from './pages/portfolio/gamedev/GameDevPortfolio'
//import BeatKana from './pages/portfolio/gamedev/BeatKana'
//import Lucidity from './pages/portfolio/gamedev/Lucidity'
//import LearnToDrive from './pages/portfolio/gamedev/LearnToDrive'
import SoftwarePortfolio from './pages/portfolio/software/SoftwarePortfolio'
//import OvO from './pages/portfolio/software/OvO'
import FrontendPortfolio from './pages/portfolio/frontend/FrontendPortfolio'
//import PersonalSite from './pages/portfolio/frontend/PersonalSite'

export default function App() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <Alert severity="info" sx={{ mb: 3 }}>
                This page is currently under construction.
            </Alert>
            <Box sx={{ flexGrow: 1 }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/portfolio/gamedev" element={<GameDevPortfolio />} />
                    {/*<Route path="/portfolio/gamedev/beatkana" element={<BeatKana />} />*/}
                    {/*<Route path="/portfolio/gamedev/lucidity" element={<Lucidity />} />*/}
                    {/*<Route path="/portfolio/gamedev/learntodrive" element={<LearnToDrive />} />*/}
                    <Route path="/portfolio/software" element={<SoftwarePortfolio />} />
                    {/*<Route path="/portfolio/software/ovo" element={<OvO />} />*/}
                    <Route path="/portfolio/frontend" element={<FrontendPortfolio />} />
                    {/*<Route path="/portfolio/frontend/personal-site" element={<PersonalSite />} />*/}
                </Routes>
            </Box>
            <Footer />
        </Box>
    )
}