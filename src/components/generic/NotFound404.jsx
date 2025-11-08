import { Link } from "react-router";

function NotFound404() {
    return(
        <>
        <h2>404 Not Found</h2>
        <Link to="/">Go Back to Home Page</Link>
        </>
    )
}

export default NotFound404;