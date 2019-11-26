import React from "react";
import PropTypes from "prop-types";
import styles from "./Friends.module.css";

const FriendsListItem = ({ avatar, name, isOnline }) => (
  <div className={styles.containerList}>
    {isOnline === true ? (
      <span className={styles.statusOn}>{isOnline}</span>
    ) : (
      <span className={styles.statusOf}>{isOnline}</span>
    )}

    <img className={styles.avatar} src={avatar} alt="" width="" />
    <p className={styles.name}>{name}</p>
  </div>
);

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
};

export default FriendsListItem;
