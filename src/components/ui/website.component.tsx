'use client';
import React, {useState} from 'react';

import './website.component.scss'
import ArrowLinkComponent from '@/components/ui/arrow.link.component';
import Image from 'next/image';
import {AnimatePresence, motion} from 'motion/react';

interface WebsiteProps {

    children?: React.ReactNode;
    title: string;

}

export default function() {


    const [isOpened, setIsOpened] = useState(true);

    return (
        <AnimatePresence>
        <motion.article
            className={`website ${isOpened ? 'opened' : 'closed'}`}
            animate={{
                transition: {duration: 2}
            }}
        >


                {isOpened &&
                    <motion.div
                        className={`website__opened'}`}
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        exit={{ opacity: 0, scaleX: 0 }}
                    >
                    <ArrowLinkComponent className={'website__arrow'} />


                    <Image
                        src={'assets/website1.svg'}
                        alt={'website'}
                        height={89}
                        width={89}
                        className={'website__logo'}
                    />

                    <div className="website__info">

                        <h2>Название сайта</h2>

                        <div className="website__info-line"></div>

                        <p>Мы превращаем идеи в реальность, создавая современные и привлекательные сайты, которые помогут вашему бизнесу выделиться в цифровом пространстве. Наша команда профессионалов работает над каждым проектом с вниманием к деталям и индивидуальным подходом, чтобы обеспечить максимальный результат и удовлетворение клиентов.</p>

                    </div>
                </motion.div>}



            <button onClick={() => {
                setIsOpened(!isOpened);
            }}>click</button>


        </motion.article>
        </AnimatePresence>
    );
}