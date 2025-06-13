'use client';

import React, {useCallback, useEffect, useState} from 'react';
import ServiceCardComponent from '@/components/service.card.component';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import {EmblaCarouselType} from 'embla-carousel';

import './services.slider.component.scss';

export default function() {

    const [emblaRef, emblaApi] = useEmblaCarousel({loop: false, dragFree: true});

    const [selectedSnap, setSelectedSnap] = useState(0);
    const [canScrollNext, setCanScrollNext] = useState(true);
    const [canScrollPrev, setCanScrollPrev] = useState(false);

    const updateScrollSnapState = useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedSnap(emblaApi.selectedScrollSnap());

        setCanScrollNext(emblaApi.canScrollNext());
        setCanScrollPrev(emblaApi.canScrollPrev());

    }, []);

    useEffect(() => {
        if(!emblaApi) return;
        updateScrollSnapState(emblaApi);
        emblaApi.on('select', updateScrollSnapState)
        emblaApi.on('reInit', updateScrollSnapState)
    }, [emblaApi, updateScrollSnapState])

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    <ServiceCardComponent
                        title={'Дизайн сайта'}
                        button={'от 20000₽'}
                    >
                        Предлагаем стильный и интуитивно понятный интерфейс, который отлично адаптируется под любые
                        устройства
                    </ServiceCardComponent>

                    <ServiceCardComponent
                        title={'Frontend разработка'}
                        button={'от 20000₽'}
                    >
                        Создадим пользовательский интерфейс, который обеспечит взаимодействие пользователей с продуктом
                    </ServiceCardComponent>

                    <ServiceCardComponent
                        title={'Frontend разработка'}
                        button={'от 20000₽'}
                    >
                        Создадим пользовательский интерфейс, который обеспечит взаимодействие пользователей с продуктом
                    </ServiceCardComponent>

                    <ServiceCardComponent
                        title={'Frontend разработка'}
                        button={'от 20000₽'}
                    >
                        Создадим пользовательский интерфейс, который обеспечит взаимодействие пользователей с продуктом
                    </ServiceCardComponent>

                    <ServiceCardComponent
                        title={'Frontend разработка'}
                        button={'от 20000₽'}
                    >
                        Создадим пользовательский интерфейс, который обеспечит взаимодействие пользователей с продуктом
                    </ServiceCardComponent>

                    <ServiceCardComponent
                        title={'Frontend разработка'}
                        button={'от 20000₽'}
                    >
                        Создадим пользовательский интерфейс, который обеспечит взаимодействие пользователей с продуктом
                    </ServiceCardComponent>

                    <ServiceCardComponent
                        title={'Frontend разработка'}
                        button={'от 20000₽'}
                    >
                        Создадим пользовательский интерфейс, который обеспечит взаимодействие пользователей с продуктом
                    </ServiceCardComponent>
                </div>
            </div>

            <div className="embla__controll">

                <div className="embla__controll__counter">
                    <span>{selectedSnap + 1}</span><span className={'gray'}>/10</span>
                </div>

                <div className="embla__controll__line"></div>

                <div className="embla__controll__btns">

                    <button className={`embla__controll__btn ${
                        canScrollPrev ? 'embla__controll__active' : ''
                    }`} onClick={() => {
                        emblaApi?.scrollPrev();
                    }}>
                        <Image
                            src={'assets/mingcute_arrow-left.svg'}
                            height={30}
                            width={30}
                            alt={'arrow'}
                        />
                    </button>

                    <button className={`embla__controll__btn ${
                        canScrollNext ? 'embla__controll__active' : ''
                    }`} onClick={() => {
                        emblaApi?.scrollNext();
                    }}>
                        <Image
                            src={'assets/mingcute_arrow-right.svg'}
                            height={30}
                            width={30}
                            alt={'arrow'}
                        />
                    </button>
                </div>

            </div>
        </div>

    );
}