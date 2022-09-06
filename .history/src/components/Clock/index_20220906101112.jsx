import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Clock.propTypes = {

};

function formatDate(date) {
    if (!date) return '';

    const hours = `0${date.getHours()`;
}`  onst minutes = `0${date.getMinutes()}`;
    const seconds = `0${date.getSeconds()}`;

    return `${hours}:${minutes}:${seconds}`;
}

function Clock() {

    const [timeString, setTimeString] = useState('');

    useEffect(() => {
        setInterval(() => {
            const now = new Date();
            //HH:mm:ss
            const newTimeString = formatDate(now);

            setTimeString(newTimeString);
        }, 1000)
    }, [])

    return (
        <div>
            <p style={{ fontSize: '42px' }}>{timeString}</p>
        </div>
    );
}

export default Clock;