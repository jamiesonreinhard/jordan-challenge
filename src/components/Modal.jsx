import React, {useState} from 'react';
import '../App.css';
import styled from 'styled-components';

const Modal = ({exit, addContact}) => {
    const [inputContact, setInputContact] = useState({
      first_name: '',
      last_name: '',
      email: '',
      avatar: undefined,
    })

    const changeHandler = (e) => {
      e.preventDefault();
      inputContact[e.target.name] = e.target.value;
      setInputContact({...inputContact})
    }

    const submitContact = (e) => {
      e.preventDefault();
      addContact(inputContact);
      exit();
    }

    return (
      <>
          <Overlay/>
          <StyledModal>
            <h1 onClick={exit}>X</h1>
            <h3>Details</h3>
            <form onSubmit={(e) => submitContact(e)}>
              <input type="text" name="first_name" placeholder="First Name" required onChange={(e) => changeHandler(e)}/>
              <input type="text" name="last_name" placeholder="Last Name" required onChange={(e) => changeHandler(e)}/>
              <input type="email" name="email" placeholder="Email" required onChange={(e) => changeHandler(e)}/>
              <input type="submit" value="Create Contact"/>
            </form>
          </StyledModal>
      </>
    );
}

export default Modal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0, 0.75);
  z-index: 1000;
`;

const StyledModal = styled.div`
  position:fixed;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  background: #FFF;
  padding: 50px;
  z-index:1000;

  display:flex;
  flex-direction: column;

  form {
    display:flex;
    flex-direction: column;
  }
`;
