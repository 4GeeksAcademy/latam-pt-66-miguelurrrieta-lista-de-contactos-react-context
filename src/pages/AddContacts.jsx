import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContacts = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const params = useParams();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
    if (params.id) {
        const contactToEdit = store.contacts.find(c => c.id == params.id);
        if (contactToEdit) {
            setName(contactToEdit.name);
            setEmail(contactToEdit.email);
            setPhone(contactToEdit.phone);
            setAddress(contactToEdit.address);
        }
    } else {
    
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
    }

    return () => {
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
    };
}, [params.id]);

const handleSubmit = (e) => {
    e.preventDefault();

    const currentContact = {
        name: name,
        email: email,
        phone: phone,
        address: address
    };

    if (params.id) {
        actions.updateContact(params.id, currentContact);
    } else {
        actions.createContact(name, email, phone, address);
    }

    setName("");
    setEmail("");
    setPhone("");
    setAddress("");

    navigate("/");
};
    return (
        <div className="container mt-5">
            <h1 className="text-center">{params.id ? "Edit Contact" : "Add a new contact"}</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input type="text" className="form-control" placeholder="Enter phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary w-100">Save</button>
                <Link to="/" className="mt-3 d-block text-center">or get back to contacts</Link>
            </form>
        </div>
    );
};
