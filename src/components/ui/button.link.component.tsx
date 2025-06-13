import React from 'react';

import './button.link.component.scss';
import Image from 'next/image';

interface ButtonLinkProps {

    children?: React.ReactNode;

}

export default function({children} : ButtonLinkProps) {
    return (
        <button className={'button__link'}>
            {children}
            <Image
                src={'assets/mingcute_arrow.svg'}
                alt={'arrow'}
                height={16}
                width={16}

            />
        </button>
    );
}