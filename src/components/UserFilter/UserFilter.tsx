import React from 'react';
import styles from './UserFilter.module.css';

interface UserFilterProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const UserFilter: React.FC<UserFilterProps> = ({ filter, setFilter }) => {
  return (
    <input
      className={styles.filterInput}
      type="text"
      placeholder="Filter by name, email, phone, website, or address"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};

export default UserFilter;
