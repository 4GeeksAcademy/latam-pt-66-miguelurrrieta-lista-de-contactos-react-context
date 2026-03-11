import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";

// AQUÍ VAN TUS IMPORTS DE LAS PÁGINAS:
import { Contacts } from "./pages/contacts.jsx";
import { AddContacts } from "./pages/AddContacts.jsx";

import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./pages/Footer.jsx";
import injectContext from "./store/appContext.jsx";




const App = () => {
    return (
        <div>
            <BrowserRouter>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Contacts />} path="/" />
                        <Route element={<AddContacts />} path="/add" />
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(App);
