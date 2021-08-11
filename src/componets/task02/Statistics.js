import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistic.module.css';

const Statistics = ({ title, stats }) => (
  <section className={s.statistics}>
    {title && <h2 className="title">{title}</h2>}

    <ul className={s.statsList}>
      {stats.map(({ id, label, percentage }) => {
        let color = (Math.random() * 1000000).toFixed();
        if (color.length === 5) color += '5';

        return (
          <li
            className={s.itemList}
            key={id}
            style={{ backgroundColor: `#${color}` }}
          >
            <span className={s.label}>{label}</span>
            <span>{percentage}%</span>
          </li>
        );
      })}
    </ul>
  </section>
);
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
