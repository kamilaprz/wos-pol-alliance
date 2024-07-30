import clsx from 'clsx';
import Heading from '@theme/Heading';
import Card from 'react-bootstrap/Card';

import styles from './styles.module.css';
import Link from "@docusaurus/core/lib/client/exports/Link";

const BattleList = [
    /*    {
            title: "Expedition facility Lvl 1",
            battleDate: "27.07 - 23:45 UCT",
            image: require('@site/static/img/facility.jpeg').default,
            route: "/events/facility",
        },*/
    {
        title: "Bear hunting",
        battleDate: "30.07 - 18:00 UCT",
        image: require('@site/static/img/bear.jpg').default,
        route: "/docs/battles/bear-hunting",
    },
    /*{
        title: "Foundry battle",
        battleDate: "28.07 - 19:00 UCT",
        image: require('@site/static/img/foundry.png').default,
        route: "docs/battles/foundry-battle",
    },*/
    ]

const EventsList = [
    {
        title: "Fortress battles",
        startDate: "28.07.2024",
        endDate: "31.07.2024",
        route: "/events/fortress"
    }, {
        title: "Alliance mobilisation",
        startDate: "29.07.2024",
        endDate: "03.08.2024",
        route: "/events/alliance-mobilisation"
    }, {
        title: "Working overtime",
        startDate: "28.07.2024",
        endDate: "29.07.2024",
        route: "/events/working-overtime"
    }, {
        title: "Alliance Championship",
        startDate: "29.07.2024",
        endDate: "04.08.2024",
        route: "/events/alliance-championship"
    }, {
        title: "Develop new tech",
        startDate: "30.07.2024",
        endDate: "31.07.2024",
        route: "/events/dev-new-tech"
    }, {
        title: "Crazy Joe",
        startDate: "30.07.2024",
        endDate: "01.08.2024",
        route: "/events/crazy-joe"
    }, {
        title: "Gina revenge",
        startDate: "31.07.2024",
        endDate: "02.08.2024",
        route: "/events/gina-revenge"
    }
    , {
        title: "Fishing tournament",
        startDate: "30.07.2024",
        endDate: "01.08.2024",
        route: "/events/fishing-tournament"
    }
]

function Feature({Svg, title, description}) {
    return (<div className={clsx('col col--12')}>
        <div className="text--center padding-horiz--md">
            <Heading as="h3">{title}</Heading>
            <p>{description}</p>
        </div>
    </div>);
}

function BattleCard({title, battleDate, image, route}) {
    return (
        <Link to={route} className="col col--4 margin-md shadow--md">
            <Card style={{margin: '15px'}}>
                <Card.Img variant="top" src={image}/>
                <Card.Body>
                    <Card.Title className="text--center text--semibold text--uppercase ">
                        <div>{title}</div>
                        <div>{battleDate}</div>
                    </Card.Title>
                </Card.Body>
            </Card>
        </Link>
    );
}

function RecurringEvent({startDate, endDate, title, route}) {
    // Convert string dates to Date objects
    const start = new Date(startDate.split('.').reverse().join('-')).setHours(0, 0, 0, 0);
    const end = new Date(endDate.split('.').reverse().join('-')).setHours(23, 59, 59, 999);

    // Get the current date
    const current = new Date();

    // Determine the className based on date comparison
    const isOngoing = current >= start && current <= end;
    return (
        <li>
            <Link to={route} className={" text--no-decoration "}>
                <div className="text--primary">
                    <span style={{display: isOngoing ? 'inline' : 'none'}} className="text--success"><b>Ongoing</b></span> {startDate} - {endDate} - {title}
                </div>
            </Link>
        </li>
    );
}

export default function HomepageFeatures() {
    return (<section className={styles.features}>
        <div className="container">
            <div className="row margin-top--md">
                <Heading as="h2" className="text--center padding-horiz--md col col--12">Upcoming battles</Heading>
                {BattleList.map((props, idx) => (<BattleCard key={idx} {...props} />))}
            </div>
            <div className="row margin-top--md">
                <Heading as="h2" className="text--center padding-horiz--md col col--12">Recurring events</Heading>
                <ul>
                    {EventsList.map((props, idx) => (<RecurringEvent key={idx} {...props} />))}
                </ul>
            </div>
        </div>

    </section>);
}
