import HeaderComponent from '@/components/header.component';
import AboutComponent from '@/components/about.component';

import style from './page.module.scss';
import ServicesComponent from '@/components/services.component';
import ExamplesBlock from '@/components/examples.block';
import TechnologiesBlock from '@/components/technologies.block';

export default function Home() {
  return (
    <>
        <HeaderComponent />
        <main className={style.main}>
            <AboutComponent />
            <ServicesComponent />
            <ExamplesBlock />
            <TechnologiesBlock />
        </main>
    </>
  );
}
