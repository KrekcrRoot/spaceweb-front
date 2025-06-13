import React from 'react';

import './block.component.scss';

interface BlockProps {

    children: React.ReactNode;
    id?: string;

}


export default function ({children, id} : BlockProps) {

    const classes = ['block'];
    if(id) classes.push(id);

    return (
        <section id={id} className={classes.join(' ')}>
            {children}
        </section>
    );

}