import React from 'react';

interface BlockFooterProps {
    className?: string;
    children?: React.ReactNode;
}

export default function ({className, children}: BlockFooterProps) {

    const classes = ['block__header'];
    if(className) classes.push(className);

    return (
        <div className={classes.join(' ')}>
            {children}
        </div>
    )
}