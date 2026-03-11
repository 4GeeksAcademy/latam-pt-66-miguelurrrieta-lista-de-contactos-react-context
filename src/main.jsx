import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";  // Import RouterProvider to use the router
import App  from "./routes.jsx";  // Import the router configuration


const Main = () => {
    return (
        <React.StrictMode>  
                <App />
        </React.StrictMode>
    );
};

// Render the Main component into the root DOM element.
ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
