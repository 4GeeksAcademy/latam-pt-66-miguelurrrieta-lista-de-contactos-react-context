import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContacts = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    // Estados para capturar lo que el usuario escribe
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        actions.createContact(name, email, phone, address);
      
        navigate("/");
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Add a new contact</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                        type="text" className="form-control" placeholder="Full Name"
                        value={name} onChange={(e) => setName(e.target.value)} required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email" className="form-control" placeholder="Enter email"
                        value={email} onChange={(e) => setEmail(e.target.value)} required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                        type="text" className="form-control" placeholder="Enter phone"
                        value={phone} onChange={(e) => setPhone(e.target.value)} required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input
                        type="text" className="form-control" placeholder="Enter address"
                        value={address} onChange={(e) => setAddress(e.target.value)} required
                    />
                </div>
               
                <button type="submit" className="btn btn-primary w-100">save</button>
               
                <Link to="/" className="mt-3 d-block text-primary">
                    or get back to contacts
                </Link>
            </form>
        </div>
    );
};
