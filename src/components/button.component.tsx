import React, {MouseEventHandler} from 'react';

import './button.component.scss';

interface ButtonProps {
    children: React.ReactNode;
    type?: 'primary' | 'default';
    upper?: boolean;
    eventClick?: MouseEventHandler;
    // onClick?:
}

export default function ({children, type, upper, eventClick} : Readonly<ButtonProps>) {

    type === undefined ? type = 'default' : null;
    upper === undefined ? upper = true : null;

    return (
        <button onClick={eventClick} className={`button button__${type} ${upper? 'uppercase' : ''}`}>
            {children}
        </button>
    )

}