import React from 'react';
import '../Styles/Sidebar.css';
import truck from '../../assets/icons/truckIcon.png'
import dashboardIcon from '../../assets/icons/dashboardIcon.png';
import labIcon from '../../assets/icons/labIcon.png';
import productIcon from '../../assets/icons/productIcon.png';
import logo from '../../assets/logo/logo.png'

const Sidebar = () => {
    return (
        <>
            <div class="sidenav">
                <a className="nav-icon-link" href="/"><img src={logo} alt='header' /></a>
                <a className="nav-icon-link" href="/"><img className="nav-icon" src={dashboardIcon} alt='truck' />Dashboard</a>
                <a className="nav-icon-link" href="/"><img className="nav-icon" src={productIcon} alt='truck' />Products</a>
                <a className="nav-icon-link" href="/"><img className="nav-icon" src={truck} alt='truck' />Transports</a>
                <a className="nav-icon-link" href="/"><img className="nav-icon" src={labIcon} alt='truck' />Laboratories</a>
            </div>
        </>
    );
};

export default Sidebar;