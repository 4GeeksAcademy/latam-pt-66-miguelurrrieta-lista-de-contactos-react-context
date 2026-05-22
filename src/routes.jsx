import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";

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
                        <Route path="/" element={<Contacts />} />
                        <Route path="/add-contact" element={<AddContacts />} />
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};


export default injectContext(App);
