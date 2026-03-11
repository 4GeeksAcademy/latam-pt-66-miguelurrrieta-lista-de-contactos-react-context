const getState = ({ getStore, getActions, setStore }) => {
return {
store: {

contacts: [
{
id: 1,
name: "Miguel Urrieta",
email: "mike@gmail.com",
phone: "555-555-555",
address: "123 Street, Miami"
}
]
},
actions: {

createContact: (name, email, phone, address) => {
const store = getStore();
const newContact = {
id: store.contacts.length + 1,
name: name,
email: email,
phone: phone,
address: address
};

setStore({ contacts: [...store.contacts, newContact] });
},


deleteContact: (id) => {
const store = getStore();
const updatedContacts = store.contacts.filter((c) => c.id !== id);
setStore({ contacts: updatedContacts });
}
}
};
};

export default getState;
