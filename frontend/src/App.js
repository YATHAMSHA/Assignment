import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupScreen from './screens/SignupScreen';
import PostListScreen from './screens/PostListScreen';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/posts" element={<PostListScreen />} />
          <Route path="/" element={<PostListScreen />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
