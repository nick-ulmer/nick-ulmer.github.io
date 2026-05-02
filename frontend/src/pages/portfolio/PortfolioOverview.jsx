import { useEffect } from 'react';
import PortfolioCategory from '../../components/PortfolioCategory';

export default function PortfolioOverview() {
    useEffect(() => {
        document.title = 'Portfolio | Nicholas A. Ball Ulmer';
    }, []);

    return (
        <PortfolioCategory title="All Projects" />
    );
}