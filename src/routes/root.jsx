import { Link, Outlet } from 'react-router-dom';

export default function Root() {
    return (
        <>
        <nav>
            <p>
                <a href={`/`}>👋</a> &mdash;
                <Link to={`/app`}>App</Link> &mdash;
                <Link to={`/clock`}>Clock</Link> &mdash;
                <Link to={`/fetcher`}>API Fetcher</Link> &mdash;
                <Link to={`/equalizer`}>Equalizer</Link> &mdash;
                <Link to={`/names`}>Names</Link>
            </p>
        </nav>
        <hr/>
        <div>
            <Outlet />
        </div>
        </>
    );
}