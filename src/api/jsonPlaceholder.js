// Base URL for JSONPlaceholder API
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Fetch all posts from JSONPlaceholder
 * @returns {Promise<Array>} Array of posts
 */
export const fetchPosts = async () => {
  const response = await fetch(`${API_BASE_URL}/posts`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};

/**
 * Fetch a single post by ID
 * @param {number} id - Post ID
 * @returns {Promise<Object>} Single post object
 */
export const fetchPost = async (id) => {
  const response = await fetch(`${API_BASE_URL}/posts/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch post ${id}`);
  }
  return response.json();
};

/**
 * Fetch all users from JSONPlaceholder
 * @returns {Promise<Array>} Array of users
 */
export const fetchUsers = async () => {
  const response = await fetch(`${API_BASE_URL}/users`);
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return response.json();
};

/**
 * Fetch a single user by ID
 * @param {number} id - User ID
 * @returns {Promise<Object>} Single user object
 */
export const fetchUser = async (id) => {
  const response = await fetch(`${API_BASE_URL}/users/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch user ${id}`);
  }
  return response.json();
};

/**
 * Fetch comments for a specific post
 * @param {number} postId - Post ID
 * @returns {Promise<Array>} Array of comments
 */
export const fetchComments = async (postId) => {
  const response = await fetch(`${API_BASE_URL}/posts/${postId}/comments`);
  if (!response.ok) {
    throw new Error(`Failed to fetch comments for post ${postId}`);
  }
  return response.json();
}; 