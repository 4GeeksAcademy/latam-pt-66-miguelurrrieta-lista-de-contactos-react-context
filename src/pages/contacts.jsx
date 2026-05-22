import React, { useContext } from "react";
import { AppContext } from "../store/appContext.jsx";
import { Link } from "react-router-dom";

export const Contacts = () => {
    
    const { contacts, dispatch } = useContext(AppContext);

    return (
        <div className="container mt-5" style={{ maxWidth: "800px" }}>
            
            <div className="d-flex justify-content-end mb-4">
                <Link to="/add-contact" className="btn btn-success">
                    Add new contact
                </Link>
            </div>

            <div className="card shadow-sm">
                <ul className="list-group list-group-flush">
                    {contacts.map((contact) => (
                        <li key={contact.id} className="list-group-item p-4">
                            <div className="row align-items-center">
                               
                                
                                <div className="col-12 col-sm-3 col-md-2 text-center mb-3 mb-sm-0">
                                    <img
                                        src="https://picsum.photos/id/1025/150/150" 
                                        alt={contact.name}
                                        className="rounded-circle img-fluid"
                                        style={{ width: "90px", height: "90px", objectFit: "cover" }}
                                    />
                                </div>

                                
                                <div className="col-12 col-sm-6 col-md-8 text-center text-sm-start">
                                    <h5 className="mb-2 font-weight-bold">{contact.name}</h5>
                                   
                                    <p className="text-muted mb-1">
                                        <i className="fas fa-map-marker-alt me-2 text-secondary" style={{ width: "15px" }}></i>
                                        {contact.address || "No address provided"}
                                    </p>
                                   
                                    <p className="text-muted mb-1">
                                        <i className="fas fa-phone me-2 text-secondary" style={{ width: "15px" }}></i>
                                        <span className="small">{contact.phone}</span>
                                    </p>
                                   
                                    <p className="text-muted mb-0">
                                        <i className="fas fa-envelope me-2 text-secondary" style={{ width: "15px" }}></i>
                                        <span className="small text-truncate">{contact.email}</span>
                                    </p>
                                </div>

                        
                                <div className="col-12 col-sm-3 col-md-2 text-center text-sm-end mt-3 mt-sm-0">
                                 
                                    <button className="btn btn-link text-dark p-2 me-2">
                                        <i className="fas fa-pencil-alt"></i>
                                    </button>
                                   
                               
                                    <button
                                        className="btn btn-link text-danger p-2"
                                        onClick={() => dispatch({ type: "DELETE_CONTACT", payload: contact.id })}
                                    >
                                        <i className="fas fa-trash-alt"></i>
                                    </button>
                                </div>

                            </div>
                        </li>
                    ))}
                   
            
                    {contacts.length === 0 && (
                        <li className="list-group-item p-4 text-center text-muted">
                            No contacts available. Click "Add new contact" to create one.
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};