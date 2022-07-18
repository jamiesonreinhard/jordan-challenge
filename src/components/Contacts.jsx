import React, {useState} from 'react';
import '../App.css';
import styled from 'styled-components';
import Modal from './Modal';

const Contacts = ({contacts}) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="container">
            {modalOpen && <Modal exit={() => setModalOpen(false)}/>}
            <Menu>
                <input type='text' name='contactSearch'></input>
                <button onClick={() => setModalOpen(true)}>New Contact</button>
            </Menu>
            <ContactsContainer>
            {contacts.length && contacts.map((contact) => (
                <ContactCard key={contact.id}>
                    <img src={contact.avatar} alt='avatar'/>
                    <h3>{contact.first_name + ' ' + contact.last_name}</h3>
                </ContactCard>
            ))}
            </ContactsContainer>
        </div>
    );
}

export default Contacts;

const Menu = styled.div`
    height: 100px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    * {
    height: 50%;
    margin-left: 10px;
    border: none;
    }

    button {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 12px 16px;
        gap: 10px;
        width: 155px;
        height: 48px;

        background: #3395FF;
        border-radius: 10px;

        flex: none;
        order: 1;
        flex-grow: 0;
    }

    input {
        border: 1px solid gray;
        border-radius: 40px;
        width: 250px;
    }
`;

const ContactsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

const ContactCard = styled.div`
    flex: 1 0 21%;
    margin: 5px;
    height: 187px;
    background-color: white;

    box-shadow: 0px 16px 80px -8px rgba(0, 0, 0, 0.08);
    border-radius: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
        width:25%;
        height:auto;
        margin-bottom: 5px;
    }
`;
