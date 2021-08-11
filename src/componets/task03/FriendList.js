import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendList = ({ friends = [] }) => (
  <ul className={s.friendList}>
    {friends.map(({ id, name, avatar, isOnline }) => {
      let color = '';
      isOnline ? (color = 'green') : (color = 'red');
      return (
        <li className={s.friendListItem} key={id}>
          <span
            className={s.status}
            style={{ backgroundColor: `${color}` }}
          ></span>
          <img className={s.avatar} src={avatar} alt={name} width="48" />
          <p className={s.name}>{name}</p>
        </li>
      );
    })}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
