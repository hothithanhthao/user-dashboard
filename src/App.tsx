import React from 'react';
import useSWR from 'swr';
import UserList from './components/UserList/UserList';
import { User } from './types';
import styles from './App.module.css';

const fetcher = (url: string) => fetch(url).then(res => res.json());

const App: React.FC = () => {
  const { data: users, error } = useSWR<User[]>('https://jsonplaceholder.typicode.com/users', fetcher);

  if (error) return <div>Failed to load users</div>;
  if (!users) return <div>Loading...</div>;

  return (
    <div className={styles.dashboard}>
      <h1>User Dashboard</h1>
      <UserList users={users} />
    </div>
  );
};

export default App;