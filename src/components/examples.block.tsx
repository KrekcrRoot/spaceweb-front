import React from 'react';
import BlockComponent from '@/components/block/block.component';
import BlockHeaderComponent from '@/components/block/block.header.component';
import BlockFooterComponent from '@/components/block/block.footer.component';
import Image from 'next/image';

import './examples.block.scss';
import ButtonLinkComponent from '@/components/ui/button.link.component';
import WebsiteComponent from '@/components/ui/website.component';

export default function () {
    return (
        <BlockComponent id={'examples'}>
            <BlockHeaderComponent className={'examples__header'}>

                <div className="examples__header__title">
                    <div className="examples__header__title-top">

                        <h1>Примеры</h1>

                        <Image

                            src={'assets/star2.svg'}
                            width={67}
                            height={67}
                            alt={'star'}

                            className={'star'}

                        />

                        <p>Здесь представлены<br/>примеры наших работ</p>

                    </div>
                    <div className="examples__header__title-bottom">

                        <div className="examples__header__title-bottom-abstract">

                            <div className="abstract__circle">
                                <Image

                                    src={'assets/moon.svg'}
                                    width={0}
                                    height={0}
                                    sizes={'100vw'}
                                    style={{width: '60%', height: 'auto'}}
                                    alt={'moon'}

                                />
                            </div>

                            <div className="abstract__circle"></div>
                            <div className="abstract__circle"></div>

                            <div className="abstract__text">
                                портфолио
                            </div>

                        </div>
                        <h1>наших работ</h1>

                    </div>
                </div>

                <div className="examples__header__btns">

                    <ButtonLinkComponent>Больше</ButtonLinkComponent>

                </div>

            </BlockHeaderComponent>
            <BlockFooterComponent className={'examples__footer'}>

                <WebsiteComponent />

            </BlockFooterComponent>
        </BlockComponent>
    )
}