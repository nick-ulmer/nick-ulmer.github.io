import { Alert, Box } from '@mui/material'
import { useNavigate, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Belief from './pages/belief/Belief'
import BeliefLayout from './components/BeliefLayout'
import MdxDocumentPage from './components/MdxDocumentPage'


import PortfolioOverview from './pages/portfolio/PortfolioOverview'
import PortfolioLayout from './components/portfolio/PortfolioLayout'
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

const routes = [
    { path: "/", element: <Home /> },
    { path: "/contact", element: <Contact /> },
    { path: "/about", element: <About /> },
    {
        path: "/belief", element: <BeliefLayout />,
        children: [
            { index: true, element: <MdxDocumentPage /> },
            { path: ":slug", element: <MdxDocumentPage /> },
        ],
    },
    //{ path: "/portfolio", element: <PortfolioOverview /> },
    {
        path: "/portfolio",
        element: <PortfolioLayout />,
        children: [
            { index: true, element: <PortfolioOverview /> },

            { path: "gamedev", element: <GameDevPortfolio /> },
            { path: "software", element: <SoftwarePortfolio /> },
            { path: "frontend", element: <FrontendPortfolio /> },
            { path: "datascience", element: <DataSciencePortfolio /> },

            { path: ":category/:slug", element: <MdxDocumentPage /> },
        ],
    },
    /*{ path: "/portfolio/gamedev", element: <GameDevPortfolio /> },
    { path: "/portfolio/software", element: <SoftwarePortfolio /> },
    { path: "/portfolio/frontend", element: <FrontendPortfolio /> },
    { path: "/portfolio/datascience", element: <DataSciencePortfolio /> },*/
    //{ path: "/portfolio/software/ovo", element: <OvOProject /> },
];

function renderRoutes(routes) {
    return routes.map(route => (
        <Route
            key={route.path ?? 'index'}
            path={route.path}
            index={route.index}
            element={route.element}
        >
            {route.children && renderRoutes(route.children)}
        </Route>
    ));
}

export default function App() {
    const navigate = useNavigate();

    useEffect(() => {
        const handleF1 = (e) => {
            if (e.key === 'F1') {
                e.preventDefault();
                navigate('/about');  // Placeholder. Just directs to about page.
            }
        };

        window.addEventListener('keydown', handleF1);
        return () => window.removeEventListener('keydown', handleF1);
    }, []);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                {/*}<Routes>
                    {routes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.element}
                        />
                    ))}
                    <Route path="*" element={<NotFound />} />
                </Routes>*/}
                <Routes>
                    {renderRoutes(routes)}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Box>
            <Footer />
        </Box>
    )
}