import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'TOP 10 alliances and their farms',
        Svg: require('@site/static/img/podium-svgrepo-com.svg').default,
        className: 'col col--3',
        description: (
            <div style={{textAlign: "left"}}>
                <ol style={{ fontWeight: "bold" }}>
                    <li>300 - 3oo</li>
                    <li>OSM - osm</li>
                    <li>NOM</li>
                    <li>WAR - War</li>
                    <li>POL</li>
                    <li>AUS - Aus</li>
                    <li>FZN</li>
                    <li>JfF</li>
                    <li>AOW</li>
                    <li>MVT</li>
                </ol>
            </div>
        ),
    },
    {
        title: 'Non-Aggression Pact (NAP10) rules',
        Svg: require('@site/static/img/podium-svgrepo-com.svg').default,
        className: 'col col--9',
        description: (
            <div style={{textAlign: "left"}}>
                <div>
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
    ]

function Nap10Feature({Svg, title, description, className}) {
    return (
        <div className={className}>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function Nap10Component() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Nap10Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}