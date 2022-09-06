import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Clock.propTypes = {

};

function formatDate (Date){
    return 
}

function Clock() {

    const [timeString, setTimeString] = useState('');

    useEffect(() => {
        setInterval(() =>{
            const now=new Date();
            //HH:mm:ss
            const newTimeString= formatDate(now);
        },1000)
    },[])

    return (
        <div>
            <p style={{ fontSize: '42px' }}>{timeString}</p>
        </div>
    );
}

export default Clock;