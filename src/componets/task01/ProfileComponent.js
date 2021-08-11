import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from '../task01/img-default/default.jpg';
import s from './Profile.module.css';

const Profile = ({ name, tag, location, avatar = defaultImg, stats = [] }) => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt={name} className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.personalInfo}>@{tag}</p>
        <p className={s.personalInfo}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.itemStats}>
          <span className={s.personalInfo}>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={s.itemStats}>
          <span className={s.personalInfo}>Views</span>

          <span>{stats.views}</span>
        </li>
        <li className={s.itemStats}>
          <span className={s.personalInfo}>Likes</span>

          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    likes: PropTypes.number,
    views: PropTypes.number,
    followers: PropTypes.number,
  }),
};

export default Profile;
