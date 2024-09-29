import React from 'react';
import useSWR from 'swr';
import { User } from './types';

const fetcher = (url: string) => fetch(url).then(res => res.json());

const App: React.FC = () => {
  const { data: users, error } = useSWR<User[]>('https://jsonplaceholder.typicode.com/users', fetcher);

  if (error) return <div>Failed to load users</div>;
  if (!users) return <div>Loading...</div>;

  return (
    <div className="app-container">
      <h1>User Dashboard</h1>
    </div>
  );
};

export default App;