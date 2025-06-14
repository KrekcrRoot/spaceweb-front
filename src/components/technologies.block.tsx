import React from 'react';
import BlockComponent from '@/components/block/block.component';
import BlockHeaderComponent from '@/components/block/block.header.component';
import BlockFooterComponent from '@/components/block/block.footer.component';

import Image from 'next/image';
import './technologies.block.scss';

export default function() {
    return (
        <BlockComponent id={'technologies'}>
            <BlockHeaderComponent className={'technologies__header'}>

                <div className="technologies__header-top">
                    <h1>Технологии</h1>

                    <Image
                        src={'assets/star3.svg'}
                        height={0}
                        width={0}
                        sizes={'100vw'}
                        style={{
                            width: 'auto',
                            height: '100%',
                        }}
                        alt={'star'}
                    />

                    <p>которые мы</p>

                </div>
                <div className="technologies__header-bottom">

                    <Image
                        src={'assets/tech1.svg'}
                        height={0}
                        width={0}
                        sizes={'100vw'}
                        style={{
                            width: 'auto',
                            height: '100%',
                        }}
                        alt={'tech'}
                    />

                    <p>используем</p>

                    <h1>в разработке</h1>

                </div>

            </BlockHeaderComponent>
            <BlockFooterComponent className={'technologies__footer'}>



            </BlockFooterComponent>
        </BlockComponent>
    );
}