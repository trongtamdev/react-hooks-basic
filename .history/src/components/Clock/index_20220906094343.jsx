import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Clock.propTypes = {

};

function Clock() {

    const [timeString, setTimeString] = useState('');

    useEffect(() => {
        setInterval(() =>{
            const now=new Date();
            //HH:mm:ss
            const
        },1000)
    },[])

    return (
        <div>
            <p style={{ fontSize: '42px' }}>{timeString}</p>
        </div>
    );
}

export default Clock;