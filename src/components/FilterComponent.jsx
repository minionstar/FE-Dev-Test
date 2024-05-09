import PropTypes from "prop-types";

/**
 * Renders a dropdown allowing users to filter posts by selecting a user.
 * This component takes an array of users and a callback function to handle the user selection change.
 *
 * @param {Array} users - Array of user objects with 'id' and 'name' properties.
 * @param {Function} onUserFilterChange - Callback function that handles the change of selected user.
 */
function FilterComponent({ users, onUserFilterChange }) {
    // Improved handling of empty user array
    if (!users.length) {
        return <p className="text-center mr-5">No users available.</p>;
    }

    return (
        <div className="filter-section flex flex-row justify-start items-center">
            <label htmlFor="user-filter" className="mr-3 font-semibold">Select a User:</label>
            <select id="user-filter" onChange={(e) => onUserFilterChange(e.target.value)} className="border border-gray-300 rounded-md p-1">
                <option value="">All</option>
                {users.map(user => (
                    <option key={user.id} value={user.id}>{user.name}</option>
                ))}
            </select>
        </div>
    );
}

FilterComponent.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    })).isRequired,
    onUserFilterChange: PropTypes.func.isRequired
};

export default FilterComponent;
