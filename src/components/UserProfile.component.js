import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.bio}</p>
    </div>
  );
};

export default UserProfile;