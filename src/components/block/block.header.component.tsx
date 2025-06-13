import React from 'react';

interface BlockHeaderProps {
    className?: string;
    children?: React.ReactNode;
}

export default function ({className, children}: BlockHeaderProps) {

    const classes = ['block__header'];
    if(className) classes.push(className);

    return (
        <div className={classes.join(' ')}>
            {children}
        </div>
    )
}