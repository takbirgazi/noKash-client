import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h2 className="my-2 text-xl">404 | Page Not Found</h2>
            <Link to="/" className="px-4 py-1 bg-blue-500 text-white rounded">Home</Link>
        </div>
    );
};

export default Error;