import React from 'react';
import moment from 'moment';

export function withDateTime(Component, date) {
    const timePassed = moment(date).fromNow();
    return class extends React.Component {
        render() {
            return (
                <Component date={timePassed}/>
            )
        }

    }
}
