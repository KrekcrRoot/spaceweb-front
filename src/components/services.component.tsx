
import './services.component.scss';

import Image from 'next/image';
import BlockComponent from '@/components/block/block.component';
import BlockHeaderComponent from '@/components/block/block.header.component';
import BlockFooterComponent from '@/components/block/block.footer.component';
import Button from '@/components/button.component';
import ServicesSliderComponent from '@/components/services.slider.component';

export default function () {


    return (
        <BlockComponent id={'services'}>
            <BlockHeaderComponent className={'services__header'}>

                <div className="services__header__title">

                    <div className="services__header__title-top">

                        <h1>Наши</h1>

                        <Image

                            src={'assets/star.svg'}
                            width={67}
                            height={67}
                            alt={'star'}

                            className={'star'}

                        />

                        <p>Ознакомтесь с нашими<br/> предложениями</p>

                    </div>
                    <div className="services__header__title-bottom">

                        <div className="services__header__title-bottom-box"></div>

                        <h1>услуги</h1>

                    </div>

                </div>

                <Image
                    src={'assets/wheel.svg'}
                    alt={'wheel'}
                    width={0}
                    height={0}
                    sizes={'100vw'}
                    style={{ width: 'auto', height: '100%' }} // optional
                />


                <div className={'services__header__buttons'}>

                    <div className="circles__btn">

                        <div className="circles__btn__circle circles__btn__circle-left"></div>
                        <div className="circles__btn__circle circles__btn__circle-right"></div>
                        <div className="circles__btn__arrow">
                            <Image
                                src={'assets/mingcute_arrow.svg'}
                                height={0}
                                width={0}
                                alt={'->'}
                                sizes={'100vw'}
                                style={{width: '50%', height: 'auto'}}
                            />
                        </div>

                    </div>

                    <Button type={'primary'}>заказать</Button>
                </div>

            </BlockHeaderComponent>
            <BlockFooterComponent className={'services__main'}>
                <ServicesSliderComponent />
            </BlockFooterComponent>
        </BlockComponent>
    )
}