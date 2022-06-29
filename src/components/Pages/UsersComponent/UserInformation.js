import React from 'react';
import '../../Styles/UserInformation.css';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import image2 from '../../../assets/images/image2.png';
import { Button, Col, Row } from 'antd';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

const onChange = (key) => {
    console.log(key);
};

const UserInformation = () => {
    return (
        <>
            <div className="user-information">
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
                <div className="tabs-area">
                    <Tabs defaultActiveKey="1" onChange={onChange}>
                        <TabPane tab="Summary" key="1">
                            <Row>
                                <Col span={6}>✔️ Good response time</Col><Col span={6}>100% Job Success Rate</Col>
                                <br />
                                <Col span={6}>✔️ Experienced driver</Col><Col span={6}>13,000/KM Experience</Col>
                                <br />
                                <Col span={6}>✔️ Top rated in platform</Col><Col span={6}>11 Project Completed</Col>
                            </Row>
                            <hr />
                        </TabPane>
                        <TabPane tab="Feedback" key="2">
                            Content of Tab Pane 2
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </>
    );
};

export default UserInformation;