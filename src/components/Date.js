import React from 'react';
import '../index.css'

const getDate = () => {
    const now = new Date();
    const options = {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        weekday: 'long'
    };
    return new Intl.DateTimeFormat('en-US', options).format(now);
}

const LongDate = () => {
    return (
        <h1 className="h1-data">{getDate()}</h1>
    );
};

export default LongDate;