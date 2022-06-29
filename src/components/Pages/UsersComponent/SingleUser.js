import React from 'react';
import '../../Styles/SingleUser.css';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import image2 from '../../../assets/images/image2.png';
import image3 from '../../../assets/images/image3.png';
import image4 from '../../../assets/images/image4.png';
import { Button } from 'antd';

const SingleUser = ({ users }) => {
    return (
        <>
            <div className="single-user-information">
                <div className="user-info">
                    <div className="user-profile"><img src={image2} alt="" /></div>
                    <div className="user-profile user-name">
                        <p className="userName">Patrick Leach</p>
                        <p>Erick, Oklahoma</p>
                    </div>
                </div>
                <div className="car-info">
                    <p className="car-model">Toyota CHR</p>
                    <p className="car-model-year">2018, GA-LXM</p>
                </div>
                <div className="rating-area">
                    <p className="rating-header">Overall Rating</p>
                    <p className="rating-number">4.9</p>
                    <p className="rating-icon">
                        <BsStarFill className="rating-icon" />
                        <BsStarFill className="rating-icon" />
                        <BsStarFill className="rating-icon" />
                        <BsStarFill className="rating-icon" />
                        <BsStarHalf className="rating-icon" />
                    </p>
                </div>
                <div className="bid-info">
                    <p className="bid-header">Bid Amount</p>
                    <p className="bid-price">$260.00</p>
                </div>
                <div className="btn-area">
                    <Button className="accept-btn" type="primary">Accept</Button>
                    <br />
                    <Button className="decline-btn" type="primary">Decline</Button>
                    <p>Mark Shortlist</p>
                </div>
            </div>
            {/* ---------------------------------------- */}
            <div className="user-2">
                <div className="user-info">
                    <div className="user-profile"><img src={image3} alt="" /></div>
                    <div className="user-profile user-name">
                        <p className="userName">Henry Ford</p>
                        <p>Tulsa, Oklahoma</p>
                    </div>
                </div>
                <div className="car-info">
                    <p className="car-model">Ford Truck</p>
                    <p className="car-model-year">2018, GA-LXM</p>
                </div>
                <div className="rating-area">
                    <p className="rating-header">Overall Rating</p>
                    <p className="rating-number">4.8</p>
                    <p className="rating-icon">
                        <BsStarFill className="rating-icon" />
                        <BsStarFill className="rating-icon" />
                        <BsStarFill className="rating-icon" />
                        <BsStarFill className="rating-icon" />
                        <BsStarHalf className="rating-icon" />
                    </p>
                </div>
                <div className="bid-info">
                    <p className="bid-header">Bid Amount</p>
                    <p className="bid-price">$255.00</p>
                </div>
                <div className="btn-area">
                    <Button className="accept-btn" type="primary">Accept</Button>
                    <br />
                    <Button className="decline-btn" type="primary">Decline</Button>
                    <p>Mark Shortlist</p>
                </div>
            </div>

            {/* ---------------------------------------- */}
            <div className="user-3">
                <div className="user-info">
                    <div className="user-profile"><img src={image4} alt="" /></div>
                    <div className="user-profile user-name">
                        <p className="userName">Ken Miles</p>
                        <p>Erick, Oklahoma</p>
                    </div>
                </div>
                <div className="car-info">
                    <p className="car-model">Tata GLS</p>
                    <p className="car-model-year">2018, GA-LXM</p>
                </div>
                <div className="rating-area">
                    <p className="rating-header">Overall Rating</p>
                    <p className="rating-number">4.8</p>
                    <p className="rating-icon">
                        <BsStarFill className="rating-icon" />
                        <BsStarFill className="rating-icon" />
                        <BsStarFill className="rating-icon" />
                        <BsStarFill className="rating-icon" />
                        <BsStarHalf className="rating-icon" />
                    </p>
                </div>
                <div className="bid-info">
                    <p className="bid-header">Bid Amount</p>
                    <p className="bid-price">$245.00</p>
                </div>
                <div className="btn-area">
                    <Button className="accept-btn" type="primary">Accept</Button>
                    <br />
                    <Button className="decline-btn" type="primary">Decline</Button>
                    <p>Mark Shortlist</p>
                </div>
            </div>
            {/* ---------------------------------------- */}
            <div className="user-4">
                <div className="user-info">
                    <div className="user-profile"><img src={image2} alt="" /></div>
                    <div className="user-profile user-name">
                        <p className="userName">Ken Miles</p>
                        <p>Erick, Oklahoma</p>
                    </div>
                </div>
                <div className="car-info">
                    <p className="car-model">Sany XL</p>
                    <p className="car-model-year">2018, GA-LXM</p>
                </div>
                <div className="rating-area">
                    <p className="rating-header">Overall Rating</p>
                    <p className="rating-number">4.9</p>
                    <p className="rating-icon">
                        <BsStarFill className="rating-icon" />
                        <BsStarFill className="rating-icon" />
                        <BsStarFill className="rating-icon" />
                        <BsStarFill className="rating-icon" />
                        <BsStarHalf className="rating-icon" />
                    </p>
                </div>
                <div className="bid-info">
                    <p className="bid-header">Bid Amount</p>
                    <p className="bid-price">$265.00</p>
                </div>
                <div className="btn-area">
                    <Button className="accept-btn" type="primary">Accept</Button>
                    <br />
                    <Button className="decline-btn" type="primary">Decline</Button>
                    <p>Mark Shortlist</p>
                </div>
            </div>
            {/* ---------------------------------------- */}
        </>
    );
};

export default SingleUser;