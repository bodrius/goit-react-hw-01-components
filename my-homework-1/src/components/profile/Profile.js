import React from "react";
import css from "./profile.module.css";
import PropTypes from 'prop-types';

const Profile = ({ user: { name, tag, location, avatar, stats:{followers,views,likes} } }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="user avatar" className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.choise}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.choise}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.choise}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;


Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    tag: PropTypes.string,
    stats: PropTypes.shape({
      views: PropTypes.number,
      likes: PropTypes.number
    }),
  }),

};