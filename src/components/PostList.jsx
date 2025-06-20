import React, { useState, useMemo } from 'react';
import useFetch from '../hooks/useFetch';
import Card from './Card';
import Button from './Button';

const PostList = () => {
  const { data: posts, loading, error, refetch } = useFetch('https://jsonplaceholder.typicode.com/posts');
  const { data: users } = useFetch('https://jsonplaceholder.typicode.com/users');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Create a map of users for quick lookup
  const userMap = useMemo(() => {
    if (!users) return {};
    return users.reduce((acc, user) => {
      acc[user.id] = user;
      return acc;
    }, {});
  }, [users]);

  // Filter posts based on search term
  const filteredPosts = useMemo(() => {
    if (!posts) return [];
    return posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [posts, searchTerm]);

  // Paginate filtered posts
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(startIndex, startIndex + postsPerPage);
  }, [filteredPosts, currentPage, postsPerPage]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Reset page when search changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        <span className="ml-3 text-gray-600 dark:text-gray-400">Loading posts...</span>
      </div>
    );
  }

  if (error) {
    return (
      <Card variant="danger" className="text-center">
        <div className="py-4">
          <p className="text-red-600 dark:text-red-400 mb-4">Error loading posts: {error}</p>
          <Button onClick={refetch} variant="primary">
            Try Again
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="flex-grow">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''} found
        </div>
      </div>

      {/* Posts Grid */}
      {paginatedPosts.length === 0 ? (
        <Card className="text-center">
          <p className="text-gray-500 dark:text-gray-400 py-8">
            No posts found matching your search.
          </p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedPosts.map((post) => {
            const author = userMap[post.userId];
            return (
              <Card
                key={post.id}
                title={post.title}
                subtitle={author ? `By ${author.name}` : `User ${post.userId}`}
                hoverable
                className="h-full"
                footer={
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Post #{post.id}
                  </div>
                }
              >
                <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-4">
                  {post.body}
                </p>
                {author && (
                  <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                    📧 {author.email} | 🌐 {author.website}
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2">
          <Button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            variant="secondary"
            size="sm"
          >
            Previous
          </Button>
          
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Page {currentPage} of {totalPages}
          </span>
          
          <Button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            variant="secondary"
            size="sm"
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default PostList; 