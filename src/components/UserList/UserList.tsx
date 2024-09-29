import React from 'react';
import UserCard from '../UserCard/UserCard';
import { User } from '../../types';
import styles from './UserList.module.css';

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div className={styles.userListContainer}>
      <div className={styles.userList}>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
