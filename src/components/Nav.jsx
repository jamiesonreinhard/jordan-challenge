import React, {useEffect, useState} from 'react';
import '../styles/navigation.css';
import zoee from '../assets/images/logos.svg';
import notifications from '../assets/images/notifications.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';




const Nav = ({user}) => {
    const [page, setPage] = useState('Home');

    return(
        <div className='nav-bar'>
            <div className="nav-inner">
                <img src={zoee} alt="" />
                <div className="nav-items">
                    <StyledLink to="/" onClick={() => setPage('Home')} page={page} name={'Home'}>Home</StyledLink>
                    <StyledLink to="/contacts" onClick={() => setPage('Contacts')} page={page} name={'Contacts'}>Contacts</StyledLink>
                </div>
                <div className='nav-right'>
                    <img src={notifications} alt="notifications" />
                    {user.first_name && <h1>{user.first_name[0]}</h1>}
                </div>
            </div>
        </div>
    )
}

export default Nav;

const StyledLink = styled(Link)`
    font-weight: ${({page, name}) => page === name ? 'bold' : 'normal'};
    color: ${({page, name}) => page === name ? '#000 !important' : '#7D878F !important'};
`;
