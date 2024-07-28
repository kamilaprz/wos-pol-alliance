import clsx from 'clsx';
import Heading from '@theme/Heading';
import Card from 'react-bootstrap/Card';
import {Button} from "react-bootstrap";

import styles from './styles.module.css';

const BattleList = [
    {
        title: "Expedition facility Lvl 1",
        battleDate: "27.07 - 23:45 UCT",
        description: "Take over facility to gain bonuses for our alliance",
        image: require('@site/static/img/facility.jpeg').default,
        route: "/events/facility",
    },
    {
        title: "Foundry battle",
        battleDate: "28.07 - 19:00 UCT",
        description: "Occupy buildings to collect arsenal points and get extra rewards",
        image: require('@site/static/img/foundry.png').default,
        route: "/events/foundry-battle",
    }]

const EventsList = [{
    title: 'Recurring events',
    Svg: require('@site/static/img/calendar-svgrepo-com.svg').default,
    description: (<div className="row">
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
    </div>),
}, /*  {
        title: 'Tips and tricks',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
          <>
            Check here to find useful tips and tricks to improve your gameplay.
          </>
        ),
      },*/];

function Feature({Svg, title, description}) {
    return (<div className={clsx('col col--12')}>
        {/* <div className="text--center">
            <Svg className={styles.featureSvg} role="img"/>
        </div>*/}
        <div className="text--center padding-horiz--md">
            <Heading as="h3">{title}</Heading>
            <p>{description}</p>
        </div>
    </div>);
}

function BattleCard({title, battleDate, description, image, route}) {
    return (<Card className="col col--4 margin-sm">
        <Card.Img variant="top" src={image}/>
        <Card.Body>
            <Card.Title className="text--center text--semibold text--uppercase ">
                <div>{title}</div>
                <div> {battleDate}</div>
            </Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
            <Button variant="primary" href={route}>Read more...</Button>
        </Card.Body>
    </Card>);
}

export default function HomepageFeatures() {
    return (<section className={styles.features}>
        <div className="container">
            <div className="row">
                <Heading as="h2" className="text--center padding-horiz--md col col--12">Upcoming battles</Heading>
                {BattleList.map((props, idx) => (<BattleCard key={idx} {...props} />))}
            </div>
            <div className="row">
                {EventsList.map((props, idx) => (<Feature key={idx} {...props} />))}
            </div>
        </div>

    </section>);
}
