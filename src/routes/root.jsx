import { Link, Outlet } from 'react-router-dom';

export default function Root() {
    return (
        <>
        <nav>
            <p>
                <a href={`/demo-project/`}>👋</a> &mdash;
                <Link to={`/demo-project/app`}>App</Link> &mdash;
                <Link to={`/demo-project/clock`}>Clock</Link> &mdash;
                <Link to={`/demo-project/fetcher`}>API Fetcher</Link> &mdash;
                <Link to={`/demo-project/equalizer`}>Equalizer</Link> &mdash;
                <Link to={`/demo-project/names`}>Names</Link>
            </p>
        </nav>
        <hr/>
        <div>
            <Outlet />
        </div>
        </>
    );
}