import React from 'react';
import '../Styles/VehicleCategory.css';
import { Button } from 'antd';

const VehicleCategory = () => {
    return (
        <>
            <div className="vehicle-category">
                <div className="text-area">
                    <p id="header-text">Vehicle Category</p>
                    <p id="normal-text">Filter the vehicles category of current proposal</p>
                </div>
                <div className="btn-group">
                    <button>Truck</button>
                    <button>Van</button>
                    <button id="suv">SUV</button>
                </div>
            </div>
            <div className="filter-button-area">
                <Button className="apply-button" type="primary" block>Apply Filters</Button>
            </div>
        </>
    );
};

export default VehicleCategory;