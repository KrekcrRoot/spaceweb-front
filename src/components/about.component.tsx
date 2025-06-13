import './about.component.scss';
import Image from 'next/image';
import Button from '@/components/button.component';

export default function () {
    return (
        <div className={'about'}>

            <div className="about__container">

                <h1>Кто мы?</h1>
                <p>Мы — команда профессионалов в создании веб-сайтов, которая превращает ваши идеи в успешные онлайн-продукты. Наша компания предлагает полный спектр услуг: от разработки уникального дизайна до программирования и оптимизации. Мы учитываем потребности вашего бизнеса и создаем сайты, которые не только привлекают внимание, но и эффективно конвертируют посетителей в клиентов.</p>


                <div className="about__container__btns">

                    <Button type={'primary'}>Заказать</Button>

                    <Button>Примеры работ <Image

                        src={'assets/mingcute_arrow.svg'}
                        height={42}
                        width={42}
                        alt={'->'}

                    /></Button>

                </div>

            </div>

            <Image

                className={'about__background'}

                src={'/assets/background.png'}
                height={0}
                width={0}
                sizes={'100vw'}
                style={{
                    width: '100%',
                    height: '100%',
                }}
                alt={'background'}

            />

            {/*<div className="about__background__blur"></div>*/}

        </div>
    )
}