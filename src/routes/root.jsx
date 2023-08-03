import { Outlet, Link } from 'react-router-dom';

export default function Root() {
    return (
        <>
        <nav>
            <p>Menu: 
                <a href={`/`}>👋</a> &mdash;  
                <Link to={`/app`}>Hello Vite</Link> &mdash;
                <Link to={`/clock`}>Clock</Link> &mdash;
                <Link to={`/equalizer`}>Equalizer</Link> &mdash;
                <Link to={`/fetcher`}>API Fetcher</Link>
            </p>
        </nav>
        <hr/>
        <div>
            <Outlet />
        </div>
        </>
    )
}