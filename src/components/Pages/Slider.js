import React, { useState } from 'react';
import { Slider, Switch } from 'antd';
import '../Styles/Slider.css';

const IconSlider = () => {
    const [reverse, setReverse] = useState(true);
    return (
        <div className="icon-wrapper1">
            <Slider range defaultValue={[20, 50]} reverse={reverse} />
        </div>
    );
};

export default IconSlider;