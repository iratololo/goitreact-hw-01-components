import PropTypes from 'prop-types';
import { StatisticsList } from "./StatisticsList.stayled"
import { StatisticsItem } from "./StatisticsItem.stayled"
import { StatisticsLabel } from "./StatisticsLabel.stayled"
import { StatisticsPercent } from "./StatisticsPercent.stayled"
import {StatisticsTitle } from "./StatisticsTitle.stayled"

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
    stats: PropTypes.array,
}

export default Statistics;