import PropTypes from "prop-types";

/**
 * Displays a summary of the total counts of posts and users.
 * This component visually differentiates the count of posts and users with specific color styling.
 *
 * @param {Array} posts Array of post objects used to count total posts.
 * @param {Array} users Array of user objects used to count total users.
 */
function SummaryComponent({ posts, users }) {
    return (
        <div className="flex flex-row items-center">
            <h2 className="font-semibold">Summary: </h2>
            <p className="ml-2">Total Posts: <span className="text-red-500">{posts.length}</span></p>
            <p className="ml-2">Total Users: <span className="text-green-500">{users.length}</span></p>
        </div>
    );
}

SummaryComponent.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired, // Ensure each post has an 'id', enhance if more fields are needed
        title: PropTypes.string,         // Example additional field
        body: PropTypes.string           // Example additional field
    })).isRequired,
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired, // Ensure each user has an 'id', enhance if more fields are needed
        name: PropTypes.string           // Example additional field
    })).isRequired
};

export default SummaryComponent;
