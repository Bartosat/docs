import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className={styles.hero__subtitle}>
        <q><i>Although space program seems to lead us away from our Earth and out toward the moon, the sun, the planets, and the stars, I believe that none of these celestial objects will find as much attention and study by space scientists as our Earth. It will become a better Earth, not only because of all the new technological and scientific knowledge which we will apply to the betterment of life, but also because we are developing a far deeper appreciation of our Earth, of life, and of man</i></q> - Dr. Ernst Stuhlinger</p>
        <p className={styles.hero__subtitle}>In Jan 2021, a nano-satellite project was initiated at Govt Engineering College Barton Hill, Trivandrum in order to give graduate students the rare opportunity to experience all the challenging aspects associated with satellite design, manufacture, launch and operation. The nano- satellite follows the design concept of a 1U CubeSat, which has the shape of a cube of 10cm3 edge, of 1.33kg mass and which consumes a power of 1W. The initial orbital parameters of the nano-satellite were set to a circular sun-synchronous Low Earth Orbit (LEO).In this report we have made a detailed power budget for the satellite program.</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            View Full Documentation
          </Link>
        </div>   
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
