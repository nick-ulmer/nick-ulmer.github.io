import { Alert, Box } from '@mui/material'
import { useNavigate, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import PortfolioOverview from './pages/portfolio/PortfolioOverview'
import GameDevPortfolio from './pages/portfolio/gamedev/GameDevPortfolio'
import SoftwarePortfolio from './pages/portfolio/software/SoftwarePortfolio'
import FrontendPortfolio from './pages/portfolio/frontend/FrontendPortfolio'
import DataSciencePortfolio from './pages/portfolio/datascience/DataSciencePortfolio'
//import BeatKana from './pages/portfolio/gamedev/BeatKana'
//import Lucidity from './pages/portfolio/gamedev/Lucidity'
//import LearnToDrive from './pages/portfolio/gamedev/LearnToDrive'
import OvOProject from './pages/portfolio/software/OvOProject'
//import PersonalSite from './pages/portfolio/frontend/PersonalSite'

import NotFound from './pages/NotFound'

export default function App() {
    const navigate = useNavigate();

    useEffect(() => {
        const handleF1 = (e) => {
            if (e.key === 'F1') {
                e.preventDefault(); // stops browser default help action
                navigate('/about');  // or whatever you want it to do
            }
        };

        window.addEventListener('keydown', handleF1);
        return () => window.removeEventListener('keydown', handleF1);
    }, []);
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/portfolio" element={<PortfolioOverview />} />
                    <Route path="/portfolio/gamedev" element={<GameDevPortfolio />} />
                    <Route path="/portfolio/software" element={<SoftwarePortfolio />} />
                    <Route path="/portfolio/frontend" element={<FrontendPortfolio />} />
                    <Route path="/portfolio/datascience" element={<DataSciencePortfolio />} />
                    {/*<Route path="/portfolio/gamedev/beatkana" element={<BeatKana />} />*/}
                    {/*<Route path="/portfolio/gamedev/lucidity" element={<Lucidity />} />*/}
                    {/*<Route path="/portfolio/gamedev/learntodrive" element={<LearnToDrive />} />*/}
                    <Route path="/portfolio/software/ovo" element={<OvOProject />} />
                    {/*<Route path="/portfolio/frontend/personal-site" element={<PersonalSite />} />*/}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Box>
            <Footer />
        </Box>
    )
}