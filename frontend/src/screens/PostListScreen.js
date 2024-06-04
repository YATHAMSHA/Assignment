import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { fetchPosts } from '../utils/api';

const PostListScreen = () => {
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const loadMorePosts = async () => {
    try {
      const newPosts = await fetchPosts(page);
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      if (newPosts.length === 0) {
        setHasMore(false);
      }
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setHasMore(false); // Stop fetching more posts if there's an error
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Post List</h1>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMorePosts}
        hasMore={hasMore}
        loader={<div key={0} className="text-center">Loading...</div>}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {posts.map((post) => (
          <div key={post.id} className="border border-gray-300 rounded p-4">
            <h2 className="text-lg font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default PostListScreen;
