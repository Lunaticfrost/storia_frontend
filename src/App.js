import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import StoryPage from './pages/StoryPage';
import UserProfilePage from './pages/UserProfilePage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" component={HomePage} />
          <Route path="/stories/:storyId" component={StoryPage} />
          <Route path="/users/:userId" component={UserProfilePage} />
          <Navigate to="/" />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;