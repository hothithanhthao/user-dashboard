import React from 'react';
import styles from './UserCard.module.css';
import { User } from '../../types';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const { name, email, phone, website, address } = user;

  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noreferrer">{website}</a></p>
      <p><strong>Address:</strong> {`${address.street}, ${address.city}, ${address.zipcode}`}</p>
    </div>
  );
};

export default UserCard;
