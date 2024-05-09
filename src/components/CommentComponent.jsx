import { useState, useEffect } from 'react';
import { fetchComments } from '../api/api';
import PropTypes from 'prop-types';

/**
 * Displays comments for a specific post. Users can toggle the visibility of the comments.
 * The comments are fetched from the server when the component is first expanded.
 *
 * @param {number} postId - The ID of the post for which to fetch and display comments.
 */
function CommentComponent({ postId }) {
    const [comments, setComments] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (isOpen && !comments.length) {
            setIsLoading(true);
            fetchComments(postId)
                .then(response => {
                    setComments(response.data);
                    setError(''); // Clear any previous errors on successful fetch
                })
                .catch(err => {
                    setError('Failed to fetch comments');
                    console.error(err);
                })
                .finally(() => setIsLoading(false));
        }
    }, [isOpen, postId, comments.length]);

    return (
        <div className='flex flex-col'>
            <div className='flex flex-row justify-end'>
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded mt-3"
                >
                    {isOpen ? 'Hide Comments' : 'Show Comments'}
                </button>
            </div>
            {isOpen && (
                <div>
                    {isLoading ? (
                        <p>Loading comments...</p>
                    ) : error ? (
                        <p className="text-red-500">{error}</p>
                    ) : comments.map(comment => (
                        <div key={comment.id} className='mb-5'>
                            <h4><span className='font-semibold mr-1'>Name:</span>{comment.name}</h4>
                            <p><span className='font-semibold mr-1'>Email:</span>{comment.email}</p>
                            <div className='flex flex-row'>
                                <span className='font-semibold mr-1'>Content:</span>
                                <p>{comment.body}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

CommentComponent.propTypes = {
    postId: PropTypes.number.isRequired
};

export default CommentComponent;
