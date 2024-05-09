import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = () => axios.get(`${API_URL}/posts`);
export const fetchUsers = () => axios.get(`${API_URL}/users`);
export const fetchComments = (postId) => axios.get(`${API_URL}/posts/${postId}/comments`);
