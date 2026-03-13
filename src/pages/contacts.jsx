import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Contacts = () => {
    const { store, actions } = useContext(Context);
    const [idToDelete, setIdToDelete] = useState(null);

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-end mb-4">
                <Link className="btn btn-success" to="/add">
                    Add new contact
                </Link>
            </div>
           
            <ul className="list-group shadow">
                {store.contacts && store.contacts.map((contact, index) => {
                    return (
                        <li key={index} className="list-group-item p-4">
                            <div className="row align-items-center">
                                {/* Columna de la Imagen */}
                                <div className="col-md-3 d-flex justify-content-center">
                                    <img
                                        src="https://randomuser.me/api/portraits/men/1.jpg"
                                        alt="Contact"
                                        className="rounded-circle"
                                        style={{ width: "100px", height: "100px", objectFit: "cover" }}
                                    />
                                </div>
                               
                
                                <div className="col-md-7">
                                    <h5 className="mb-3">{contact.name}</h5>
                                    <p className="text-muted mb-1">
                                        <i className="fas fa-map-marker-alt me-3"></i> {contact.address}
                                    </p>
                                    <p className="text-muted mb-1">
                                        <i className="fas fa-phone me-3"></i> {contact.phone}
                                    </p>
                                    <p className="text-muted mb-0">
                                        <i className="fas fa-envelope me-3"></i> {contact.email}
                                    </p>
                                </div>

                              
                                <div className="col-md-2 d-flex justify-content-end align-self-start">
                                    
<Link to={"/edit/" + contact.id}>
    <button className="btn">
        <i className="fas fa-pencil-alt"></i>
    </button>
</Link>

                                    <button
    className="btn btn-link text-danger"
    data-bs-toggle="modal"
    data-bs-target="#deleteModal"
    onClick={() => setIdToDelete(contact.id)}>
    <i className="fas fa-trash-alt"></i>
</button>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Are you sure?</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                If you delete this thing the entire universe will go down!
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Oh no!</button>
                <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={() => actions.deleteContact(state.idToDelete)} 
                >
                    Yes baby!
                </button>
            </div>
        </div>
    </div>
</div>
        </div>
    );
};
