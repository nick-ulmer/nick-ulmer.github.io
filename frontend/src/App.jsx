import { Box } from '@mui/material'
import { useNavigate, Routes, Route, Outlet } from 'react-router-dom'
import { useEffect } from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import About from './pages/About'
import BeliefLayout from './components/BeliefLayout'
import MdxDocumentPage from './components/MdxDocumentPage'
import PortfolioLayout from './components/portfolio/PortfolioLayout'
import PortfolioCategory from './components/portfolio/PortfolioCategory'
import NotFound from './pages/NotFound'
import LinkedInBanner from './pages/dev/LinkedInBanner'

import LearnToDriveGame from './pages/portfolio/game/LearnToDriveGame.jsx'
import DaydreamGame from './pages/portfolio/game/DaydreamGame.jsx'

const routes = [
    { path: "/", element: <Home /> },
    { path: "/contact", element: <Contact /> },
    { path: "/resume", element: <Resume /> },
    { path: "/about", element: <About /> },
    {
        path: "/belief", element: <BeliefLayout />,
        children: [
            { index: true, element: <MdxDocumentPage /> },
            { path: ":slug", element: <MdxDocumentPage /> },
        ],
    },
    {
        path: "/portfolio", element: <PortfolioLayout />,
        children: [
            { index: true, element: <PortfolioCategory /> },
            { path: ":category", element: <PortfolioCategory /> },
            { path: ":category/:slug", element: <MdxDocumentPage /> },
        ],
    },
    {
        path: "/dev", element: <Outlet />,
        children: [
            { path: "LearnToDriveGame", element: <LearnToDriveGame /> },
            { path: "DaydreamGame", element: <DaydreamGame /> },
            { path: "linkedin-banner", element: <LinkedInBanner /> },
        ],
    },
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
                <Routes>
                    {renderRoutes(routes)}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Box>
            <Footer />
        </Box>
    )
}