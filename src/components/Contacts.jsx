import React from 'react';
import '../App.css'

const Contacts = ({contacts}) => {

    return (
        <div className="container">
            {contacts.length && contacts.map((contact) => (
                <div key={contact.id}>
                    <h3>{contact.first_name + ' ' + contact.last_name}</h3>
                </div>
            ))}
        </div>
    );
}

export default Contacts;
