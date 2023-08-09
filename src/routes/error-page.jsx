/**
 * This is a custom error page; Adapted from the react-router tutorial.
 */
import { useRouteError  } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, and unexpected error has occurred.</p>
            <p>
                <strong>{error.statusText || error.message}</strong>
            </p>
        </div>
    );
}