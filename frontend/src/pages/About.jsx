import { useEffect } from 'react';

export default function About() {
    useEffect(() => {
        document.title = 'About Page | Nicholas A. Ball Ulmer';
    }, []);
    return (
        <div style={{ padding: '2rem' }}>
            <h1>About</h1>
            <p>
                I "think" I'm an interesting fellow. Not sure yet though. Ask me again once I'm a little older.
            </p>
        </div>
    )
}
