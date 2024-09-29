import React, { useState } from 'react';
import UserFilter from '../UserFilter/UserFilter';
import UserSortControls from '../UserSortControls/UserSortControls';
import UserCard from '../UserCard/UserCard';
import useFilteredSortedUsers from '../../hooks/useFilteredSortedUsers';
import { User } from '../../types';
import styles from './UserList.module.css';

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  const {
    filteredSortedUsers,
    filter,
    setFilter,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
  } = useFilteredSortedUsers(users);

  return (
    <div className={styles.userListContainer}>
      <UserFilter filter={filter} setFilter={setFilter} />
      <UserSortControls sortBy={sortBy} setSortBy={setSortBy} sortOrder={sortOrder} setSortOrder={setSortOrder} />
      <div className={styles.userList}>
        {filteredSortedUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
