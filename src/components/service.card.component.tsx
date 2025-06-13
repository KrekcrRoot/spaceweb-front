import React from 'react';
import Button from '@/components/button.component';

import './service.card.component.scss';
import Image from 'next/image';
import ArrowLinkComponent from '@/components/ui/arrow.link.component';

interface ServiceCardProps {

    title: string;
    children: React.ReactNode;
    button: string;

}

export default function({title, children, button} : ServiceCardProps) {
    return (
        <article className={'service__card embla__slide'}>

            <ArrowLinkComponent className={'service__card__btn'} />

            <h2>{title}</h2>
            <p>{children}</p>

            <Button type={'primary'} upper={false}>{button}</Button>

        </article>
    );
}