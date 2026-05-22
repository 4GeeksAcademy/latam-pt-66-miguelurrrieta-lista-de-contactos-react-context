import React, { useState, useContext } from "react";
import { AppContext } from "../store/appContext.jsx";
import { useNavigate, Link } from "react-router-dom";

export const AddContacts = () => {
    const { dispatch } = useContext(AppContext);
    const navigate = useNavigate();

    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        
        if (name.trim() === "") return alert("Please enter a name");

        
        dispatch({
            type: "ADD_CONTACT",
            payload: { name, email, phone, address }
        });

        
        navigate("/");
    };

    return (
        <div className="container mt-5" style={{ maxWidth: "700px" }}>
            <h1 className="text-center mb-4">Add a new contact</h1>
           
            <form onSubmit={handleSubmit}>
                
                <div className="mb-3">
                    <label className="form-label font-weight-bold">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                
                <div className="mb-3">
                    <label className="form-label font-weight-bold">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                
                <div className="mb-3">
                    <label className="form-label font-weight-bold">Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                
                <div className="mb-3">
                    <label className="form-label font-weight-bold">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>

                
                <button type="submit" className="btn btn-primary w-100 mb-3">
                    Save Contact
                </button>

                
                <div className="text-center">
                    <Link to="/" className="text-decoration-none">
                        or get back to contacts
                    </Link>
                </div>
            </form>
        </div>
    );
};
