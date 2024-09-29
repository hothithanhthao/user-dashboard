import React from 'react';
import styles from './UserSortControls.module.css';

interface UserSortControlsProps {
  sortBy: 'name' | 'email';
  setSortBy: (sortBy: 'name' | 'email') => void;
  sortOrder: 'asc' | 'desc';
  setSortOrder: (order: 'asc' | 'desc') => void;
}

const UserSortControls: React.FC<UserSortControlsProps> = ({ sortBy, setSortBy, sortOrder, setSortOrder }) => {
  return (
    <div className={styles.sortControls}>
      <label>
        Sort by:
        <select
          className={styles.selectSort}
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'name' | 'email')}
        >
          <option value="name">Name</option>
          <option value="email">Email</option>
        </select>
      </label>
      <button
        className={styles.sortButton}
        onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
      >
        {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
      </button>
    </div>
  );
};

export default UserSortControls;
