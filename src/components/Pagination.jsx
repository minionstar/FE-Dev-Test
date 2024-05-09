import PropTypes from 'prop-types'; // Import PropTypes

/**
 * Renders pagination controls for navigating pages.
 * Includes "Previous" and "Next" buttons with the current page number displayed in between.
 *
 * @param {number} currentPage - The current active page.
 * @param {number} totalPosts - Total number of posts across all pages.
 * @param {number} postsPerPage - Number of posts displayed per page.
 * @param {function} paginate - Function to call when a new page number is selected.
 */
function Pagination({ currentPage, totalPosts, postsPerPage, paginate }) {
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    return (
        <nav className="pagination flex flex-row justify-end items-center py-2">
            {/* Previous Button: Only active if the current page is not the first one */}
            <button
                className={`page-item ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-200'} border border-gray-300 rounded-md px-2 mx-1`}
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous Page"
            >
                Previous
            </button>

            {/* Display the current page number */}
            <span className="current-page px-3 py-1 bg-gray-100 rounded-full text-gray-700">
                {currentPage}
            </span>

            {/* Next Button: Only active if the current page is not the last one */}
            <button
                className={`page-item ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-200'} border border-gray-300 rounded-md px-2 mx-1`}
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next Page"
            >
                Next
            </button>
        </nav>
    );
}

// Define PropTypes for Pagination component
Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPosts: PropTypes.number.isRequired,
    postsPerPage: PropTypes.number.isRequired,
    paginate: PropTypes.func.isRequired
};

export default Pagination;
