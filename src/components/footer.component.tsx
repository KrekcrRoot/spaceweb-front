'use client';
import React from 'react';

import Image from 'next/image';
import './footer.component.scss';

export default function () {
    return (
        <footer>

            <div className="footer__container">

                <div className="footer__info">

                    <h1>
                        <Image
                            src={'assets/logo.svg'}
                            height={50}
                            width={50}
                            alt={'logo'}
                        />
                        SpaceWeb
                    </h1>

                    <p>
                        Космические сайты для ваших амбициозных планов!
                    </p>

                </div>


                <div className="footer__main">

                    <div className="footer__main-top">

                        <div className="footer__main__sections">

                            <h3>Разделы сайта</h3>

                            <ul>
                                <li><a href={''}>О нас</a></li>
                                <li><a href={''}>Услуги</a></li>
                                <li><a href={''}>Примеры работ</a></li>
                                <li><a href={''}>Технологии</a></li>
                                <li><a href={''}>Отзывы</a></li>
                                <li><a href={''}>Заказать сайт</a></li>
                            </ul>

                        </div>

                        <div className="footer__main__contacts">

                            <h3>Контакты</h3>

                            <ul>
                                <li>Telegram</li>
                                <li>WhatsApp</li>
                                <li>Namecompany@gmail.com</li>
                                <li>+7 (999) 000 00 00</li>
                            </ul>

                        </div>

                    </div>
                    <div className="footer__main-bottom">

                        <button
                            className={'footer__main__up-btn'}
                            onClick={() => {
                                window.scrollTo({
                                    top: 0,
                                    behavior: 'smooth',
                                });
                            }}
                        >Наверх</button>

                    </div>

                </div>


                <div className="footer__tg">

                    <Image

                        src={'/assets/QR.png'}
                        height={0}
                        width={0}
                        sizes={'100vw'}
                        style={{
                            width: 'auto',
                            height: '100%',
                        }}
                        alt={'QR'}

                    />

                </div>

            </div>

        </footer>
    )
}