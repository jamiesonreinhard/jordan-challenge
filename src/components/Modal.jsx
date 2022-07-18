import React, {useState} from 'react';
import '../App.css';
import styled from 'styled-components';

const Modal = ({exit}) => {

    return (
      <>
          <Overlay/>
          <StyledModal>
            <h1 onClick={exit}>X</h1>
            <h3>Details</h3>
            <input type="text" name="first" placeHolder="First Name" required></input>
            <input type="text" name="last" placeHolder="Last Name" required></input>
            <input type="text" name="email" placeHolder="Email" required></input>
            <button>Create</button>
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
`;
