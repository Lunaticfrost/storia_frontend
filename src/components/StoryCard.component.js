import React from 'react';

const StoryCard = ({ story }) => {
  return (
    <div>
      <h3>{story.title}</h3>
      <p>By {story.author.name}</p>
      <p>{story.excerpt}</p>
    </div>
  );
};

export default StoryCard;