import React from 'react';
import Image from 'next/image';

import './arrow.link.component.scss';

interface ArrowLinkProps {

    className?: string;

}

export default function({className} : ArrowLinkProps) {

    return (
        <div className={`arrow_link ${className ? className : ''}`}>
            <Image
                src={'assets/arrow_topright.svg'}
                alt={'arrow'}
                width={50}
                height={50}
            />
        </div>
    );
}