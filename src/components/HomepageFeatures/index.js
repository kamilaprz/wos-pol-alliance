import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from "@docusaurus/core/lib/client/exports/Link";

const FeatureList = [
    {
        title: 'Upcoming events',
        Svg: require('@site/static/img/calendar-svgrepo-com.svg').default,
        description: (
            <div className="row">
                <div className={clsx('col col--6')}>
                    <dl>
                        <dt style={{fontWeight: "bold"}}>27.07 - 23:45 UCT</dt>
                        <dd>
                            <Link
                                className="button button--info button--outline button--lg"
                                to="/events/facility">
                                Expedition facility Lvl 1
                            </Link>
                        </dd>
                        <dt style={{fontWeight: "bold"}}>28.07 - 19:00 UTC</dt>
                        <dd><Link
                            className="button button--danger button--outline button--lg"
                            to="/events/foundry-battle">
                            Foundry battle
                        </Link></dd>
                    </dl>
                </div>
                <div className={clsx('col col--6')}>
                    <dl style={{textAlign: "left"}}>
                        <dt>28-29.07</dt>
                        <dd>Working overtime</dd>
                        <dt>28-31.07</dt>
                        <dd>Fortress battles</dd>
                        <dt>29.07-03.08</dt>
                        <dd>Alliance mobilisation</dd>
                        <dt>29.07 - 04.08</dt>
                        <dd>Alliance Championship</dd>
                        <dt>30-31.07</dt>
                        <dd>Develop new tech</dd>
                        <dt>30.07 - 01.08</dt>
                        <dd>Crazy Joe</dd>
                        <dt>31.07 - 02.08</dt>
                        <dd>Gina revenge</dd>
                    </dl>
                </div>
            </div>
        ),
    },
    /*  {
        title: 'Tips and tricks',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
          <>
            Check here to find useful tips and tricks to improve your gameplay.
          </>
        ),
      },*/
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--12')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
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
