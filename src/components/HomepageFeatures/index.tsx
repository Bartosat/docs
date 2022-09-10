import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Design it',
    Svg: require('@site/static/img/designit.svg').default,
    description: (
      <>
        Our cubesat will be designed from scratch except for the telemetry system.
      </>
    ),
  },
  {
    title: 'Test it',
    Svg: require('@site/static/img/testit.svg').default,
    description: (
      <>
        Test the designed products in the test environments, debug and redesign.
      </>
    ),
  },
  {
    title: 'Launch it',
    Svg: require('@site/static/img/isro.svg').default,
    description: (
      <>
        Our satellite will be launched with the help of Indian Space Research Organisation.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
