import CommentComponent from './CommentComponent';
import PropTypes from 'prop-types';

/**
 * Renders a list of posts. Each post includes a title, the name of the user who posted it,
 * the body of the post, and a CommentComponent for displaying comments associated with the post.
 *
 * @param {Array} posts Array of post objects containing post details and user information.
 */
function PostList({ posts }) {
    // Check if there are no posts and return a placeholder message
    if (posts.length === 0) {
        return <p className="text-center text-xl">No posts available.</p>;
    }

    return (
        <div>
            <h2 className='text-2xl font-bold text-center'>Posts</h2>
            {posts.map(post => (
                <div key={post.id} className="card border rounded-sm p-5 my-3">
                    <h3 className='font-semibold text-center text-xl mb-3 post-title'>{post.title}</h3>
                    <p className="text-sm font-semibold text-gray-500 text-end mb-3">Posted by: {post.userName || 'Unknown'}</p>
                    <p className='text-justify'>{post.body}</p>
                    
                    {/* Render CommentComponent, passing the post's ID */}
                    <CommentComponent postId={post.id} />
                </div>
            ))}
        </div>
    );
}

PostList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        userName: PropTypes.string // userName is optional; 'Unknown' will be used if not provided
    })).isRequired
};

export default PostList;
