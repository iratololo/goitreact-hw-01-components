import PropTypes from 'prop-types';

import {StatisticsItem, StatisticsLabel, StatisticsList, StatisticsPercent, StatisticsTitle} from "./Statistics.stayled"

const Statistics = ({ title, stats }) => {
    return (<section className="statistics">
        {title && <StatisticsTitle>{title}</StatisticsTitle>}
        <StatisticsList>
            {stats.map((item, index) => <StatisticsItem id={index} key={item.id}>
                <StatisticsLabel>{item.label} </StatisticsLabel>
                <StatisticsPercent>{item.percentage}%</StatisticsPercent>
            </StatisticsItem>)}
        </StatisticsList>
    </section>)
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Statistics;