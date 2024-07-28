import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'NAP10',
        Svg: require('@site/static/img/podium-svgrepo-com.svg').default,
        description: (
            <div className="row" style={{textAlign: "left"}}>
                {/*<h3 className={clsx('col col--12')}>TOP 10 alliances and their farms</h3>*/}
                <ol  className={clsx('col col--3')} style={{ fontWeight: "bold" }}>
                    <li>300 - 3oo</li>
                    <li>OSM - osm</li>
                    <li>WAR - War</li>
                    <li>NOM</li>
                    <li>POL</li>
                    <li>AUS - Aus</li>
                    <li>FZN</li>
                    <li>JfF</li>
                    <li>AOW</li>
                    <li>MVT</li>
                </ol>
                <div className={clsx('col col--9')}>
                    <ol>
                        <li>No attack upon cities, flags, HQ, rss mines, or farm alliances of top 10 (farm alliances should have same tag as main ally or something very similar).</li>
                        <li style={{ color: 'red' }}>Exception: resources mines are allowed to be attacked during events like Kill Event/Brothers in Arms</li>
                        <li>No city attacks during Fortress event, Stronghold event, internal fight castle or state vs state event</li>
                        <li>Limit of 2 Fortress/alliance + ? Strongholds per alliance. These should be shared as info in NAP room to avoid too much overlap</li>
                        <li>Report any TOP10 attack to R4/R5; no solo revenge</li>
                        <li>Alliances dropping out of top 10 stay under NAP10 for 24H</li>
                        <li>No active recruiting from other NAP10</li>
                        <li>Keep chat clean; solve issues 1:1 and let us know if we are needed as extra opinions</li>
                    </ol>
                </div>
            </div>
        ),
    },
    {
        title: 'Upcoming events',
        Svg: require('@site/static/img/calendar-svgrepo-com.svg').default,
        description: (
            <div className="row">
                <div className={clsx('col col--6')} >
                    <b>Battles</b>
                    <dl>
                        <dt style={{ fontWeight: "bold" }}>27.07 - 23:45 UCT</dt>
                        <dd> Expedition facility Lvl 1 </dd>
                        <dt style={{ fontWeight: "bold" }}>28.07 - 19:00 UTC</dt>
                        <dd> Foundry battle</dd>
                    </dl>
                </div>
                <div>
                    <b>Recurring</b>
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
        <div className={clsx('col col--6')}>
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
