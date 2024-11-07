import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserService from '../services/UserService';
import UserProfile from '../components/UserProfile.component';

const UserProfilePage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    UserService.getUserById(userId)
      .then(user => setUser(user))
      .catch(error => console.error(error));
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <UserProfile user={user} />
    </div>
  );
};

export default UserProfilePage;