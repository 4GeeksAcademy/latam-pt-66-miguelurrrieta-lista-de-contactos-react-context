export const initialContactState = [
    {
        id: 1,
        name: "Miguel Urrieta",
        email: "mike@gmail.com",
        phone: "555-555-555",
        address: "123 Street, Miami"
    }, 
    {
        id: 2,
        name: "Miguel Urrieta",
        email: "mike@gmail.com",
        phone: "555-555-555",
        address: "123 Street, Miami"
    }, 
    {
        id: 3,
        name: "Miguel Urrieta",
        email: "mike@gmail.com",
        phone: "555-555-555",
        address: "123 Street, Miami"
    }
];


export const contactReducer = (state, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            return [...state, { ...action.payload, id: Date.now() }];
           
        case "DELETE_CONTACT":
            return state.filter(contact => contact.id !== action.payload);
           
        case "UPDATE_CONTACT":
            return state.map(contact =>
                contact.id === action.payload.id ? { ...contact, ...action.payload.updatedInfo } : contact
            );
           
        default:
            return state;
    }
};
