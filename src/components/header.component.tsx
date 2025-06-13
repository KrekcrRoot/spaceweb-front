import './header.component.scss';
import Image from 'next/image';

export default function () {
    return (
        <header>

            <div className="header__logo">
                <Image

                    src={'assets/logo.svg'}
                    height={48}
                    width={48}
                    alt={'logo'}

                />
                <h2>SpaceWeb</h2>
            </div>

            <nav className="header__nav">
                <ul>
                    <li><a href="#">о нас</a></li>
                    <li><a href="#">услуги</a></li>
                    <li><a href="#">примеры</a></li>
                    <li><a href="#">отзывы</a></li>
                </ul>
            </nav>

            <div className="header__item">
                <Image
                    src={'assets/item.svg'}
                    height={48}
                    width={48}
                    alt={'item'}
                />
            </div>

        </header>
    )
}