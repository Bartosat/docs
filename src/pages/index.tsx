import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import useBaseUrl, { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HeroBanner() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <p className={styles.hero__subtitle}>
          <q><i>Although space program seems to lead us away from our Earth and out toward the moon, the sun, the planets, and the stars, I believe that none of these celestial objects will find as much attention and study by space scientists as our Earth. It will become a better Earth, not only because of all the new technological and scientific knowledge which we will apply to the betterment of life, but also because we are developing a far deeper appreciation of our Earth, of life, and of man</i></q> - Dr. Ernst Stuhlinger</p>
      </div>
    </header>
  );
}
function HomepageHeader() {
  return (
    <div className={styles.hero} data-theme="dark">
      <div className={styles.heroInner}>
        <h1 className={styles.heroProjectTagline}>
          <img
            alt={translate({ message: 'Docusaurus with Keytar' })}
            className={styles.heroLogo}
            src={useBaseUrl('/img/Bartosat.svg')}
            width="200"
            height="200"
          />
          <span
            className={styles.heroTitleTextHtml}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: translate({
                id: 'homepage.hero.title',
                message:
                  'Gecb <b>Student</b> Satellite <b>Program</b> , <b>Bartosat 1</b>',
                description:
                  'Welcome to the official site of Bartosat.',
              }),
            }}
          />
        </h1> 
          <p className={styles.hero__subtitle}>In Jan 2021, a nano-satellite project was initiated at Govt Engineering College Barton Hill, Trivandrum in order to give graduate students the rare opportunity to experience all the challenging aspects associated with satellite design, manufacture, launch and operation. The nano- satellite follows the design concept of a 1U CubeSat, which has the shape of a cube of 10cm, of 1.33kg mass and which consumes a power of 2W. </p> 
        <div className={styles.indexCtas}>
          <Link className="button button--primary" to="/docs/intro">
            <Translate>View Docs</Translate>
          </Link>
          <Link className="button button--info" to="https://github.com/Bartosat">
            <Translate>Github</Translate>
          </Link>
        </div>
      </div>
    </div>
  );
}


export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={` ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HeroBanner />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
