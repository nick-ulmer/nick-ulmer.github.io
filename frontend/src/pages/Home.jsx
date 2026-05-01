import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        document.title = 'Home | Nicholas A. Ball Ulmer';
    }, []);
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Home</h1>
            <p>
                Welcome to my website! You're here a little too early. If you're interested in this project or anything
                about me, go ahead and message or email me or something: nball1000@gmail.com
            </p>
        </div>
    )
}