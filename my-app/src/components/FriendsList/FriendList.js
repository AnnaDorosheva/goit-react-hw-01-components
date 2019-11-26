import React from "react";
import FriendsListItem from "./FriendsListItem";
import PropTypes from "prop-types";
import styles from "./Friends.module.css";

const FriendsList = ({ friends = [] }) => (
  <ul className={styles.friendList}>
    {friends.map(item => (
      <li className={styles.item} key={item.id}>
        <FriendsListItem {...item} />
      </li>
    ))}
  </ul>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired
};

export default FriendsList;
