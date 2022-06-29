import React from 'react';
import '../Styles/Header.css';
import bellIcon from '../../assets/icons/bellIcon.png'
import userImage from '../../assets/images/image1.png';
import logoutIcon from '../../assets/icons/logoutIcon.png';

const Header = () => {
    return (
        <>
            <div className="main">
                <div className="left-area">
                    <p>
                        <span className='first-item-label text-transport'>Transports</span>
                        <span className='separator text-transport'>/</span>
                        <span className="last-item-label">Proposals</span>
                    </p>
                </div>
                <div className="right-area">
                    <img id="bell-icon" src={bellIcon} alt="" />
                    <img id="user-image" src={userImage} alt="" />
                    <img id="logout-button" src={logoutIcon} alt="" />
                </div>
            </div>
        </>
    );
};

export default Header;