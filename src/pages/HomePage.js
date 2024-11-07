import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StoryService from '../services/StoryService';
import StoryCard from '../components/StoryCard.component';

const HomePage = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    StoryService.getAllStories()
      .then(stories => setStories(stories))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Stories</h1>
      <div>
        {stories.map(story => (
          <Link key={story.id} to={`/stories/${story.id}`}>
            <StoryCard story={story} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;