import { useState, useMemo } from 'react';
import { User } from '../types';

const useFilteredSortedUsers = (users: User[]) => {
  const [filter, setFilter] = useState<string>('');
  const [sortBy, setSortBy] = useState<'name' | 'email'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const filteredSortedUsers = useMemo(() => {
    const filtered = users.filter((user) =>
      [user.name, user.email, user.phone, user.website, `${user.address.street}, ${user.address.city}, ${user.address.zipcode}`]
        .some(field => field.toLowerCase().includes(filter.toLowerCase()))
    );

    const sorted = filtered.sort((a, b) => {
      const fieldA = sortBy === 'name' ? a.name : a.email;
      const fieldB = sortBy === 'name' ? b.name : b.email;
      return sortOrder === 'asc' ? fieldA.localeCompare(fieldB) : fieldB.localeCompare(fieldA);
    });

    return sorted;
  }, [users, filter, sortBy, sortOrder]);

  return {
    filteredSortedUsers,
    filter,
    setFilter,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
  };
};

export default useFilteredSortedUsers;
