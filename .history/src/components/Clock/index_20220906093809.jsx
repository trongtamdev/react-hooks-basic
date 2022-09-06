import React, { useState } from 'react';
import PropTypes from 'prop-types';

Clock.propTypes = {
    
};

function Clock() {

    const [timeString, setTimeString] = useState('');

    return (
        <div>
            <p style={{}}>{timeString</p>
        </div>
    );
}

export default Clock;