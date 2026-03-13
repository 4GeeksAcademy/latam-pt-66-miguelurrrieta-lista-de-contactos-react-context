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

updateContact: (id, updatedContact) => {
const store = getStore();
const updatedContacts = store.contacts.map((contact) => {
if (contact.id === parseInt(id)) {
return { ...contact, ...updatedContact };
}
return contact;
});
setStore({ contacts: updatedContacts });
},

deleteContact: (id) => {
const store = getStore();
const updatedList = store.contacts.filter(contact => contact.id !== id);
setStore({ contacts: updatedList });
}
}
};
};

export default getState;