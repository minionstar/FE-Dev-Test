import { useEffect, useState } from 'react';
import { fetchPosts, fetchUsers } from './api/api';
import PostList from './components/PostList';
import FilterComponent from './components/FilterComponent';
import SummaryComponent from './components/SummaryComponent';
import './index.css';

function App() {
    // State for storing all posts, users, and filtered posts
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
        // Asynchronously fetch posts and users from the API when the component mounts
        const getPostsAndUsers = async () => {
            const postsData = await fetchPosts();
            const usersData = await fetchUsers();

            // Merge posts with user information to display which user made each post
            const postsWithUsers = postsData.data.map(post => ({
                ...post,
                userName: usersData.data.find(user => user.id === post.userId)?.name || 'Unknown'
            }));

            // Update state with the fetched and merged data
            setPosts(postsWithUsers);
            setFilteredPosts(postsWithUsers); // Initially, filtered posts are all posts
            setUsers(usersData.data);
        };

        getPostsAndUsers();
    }, []);

    // Handler for changing the user filter
    const handleUserFilterChange = (userId) => {
        // Filter posts based on selected user ID or show all if no user is selected
        const filtered = userId ? posts.filter(post => post.userId === parseInt(userId)) : posts;
        setFilteredPosts(filtered);
    };

    return (
        <div className="p-10 flex flex-row justify-center w-full">
            <div className='max-w-7xl flex flex-col'>
                <div className='text-center text-3xl font-bold'>React Posts App</div>
                <div className='flex flex-col sm:flex-row justify-between mt-3'>
                    <FilterComponent users={users} onUserFilterChange={handleUserFilterChange} />
                    <SummaryComponent posts={filteredPosts} users={users} />
                </div>
                <hr className='my-5' />
                <PostList posts={filteredPosts} />
            </div>
        </div>
    );
}

export default App;
