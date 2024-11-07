import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StoryService from '../services/StoryService';
import UserProfile from '../components/UserProfile.component';

const StoryPage = () => {
  const { storyId } = useParams();
  const [story, setStory] = useState(null);

  useEffect(() => {
    StoryService.getStoryById(storyId)
      .then(story => setStory(story))
      .catch(error => console.error(error));
  }, [storyId]);

  if (!story) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{story.title}</h1>
      <p>{story.content}</p>
      <UserProfile user={story.author} />
    </div>
  );
};

export default StoryPage;