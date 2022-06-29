import React from 'react';
import IconSlider from './Slider';
import '../Styles/PriceFilter.css';
import { Col, Row } from 'antd';

const PriceFilter = () => {
    return (
        <div>
            <div className="price-filter-area">
                <div className="text-area">
                    <p id="header-text">Price Filter</p>
                    <p id="normal-text">Select the proposals as their price range</p>
                </div>
                <div className="slider-area1">
                    <div className="">
                        <Row>
                            <Col className="low-price" span={12}>$200</Col>
                            <Col className="high-price" span={12}>$500</Col>
                        </Row>
                    </div>
                    <IconSlider />
                </div>
            </div>
        </div>
    );
};

export default PriceFilter;