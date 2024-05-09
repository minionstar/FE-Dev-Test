import React from 'react';

function Pagination({ currentPage, totalPosts, postsPerPage, paginate }) {
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    return (
        <nav className="pagination flex flex-row justify-end">
            {/* Previous Button */}
            <button
                className={`page-item ${currentPage === 1 ? 'disabled' : ''} border border-gray-300 rounded-md px-2 mx-1`}
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Pre
            </button>

            {/* Current Page Number */}
            <span className="current-page px-3">{currentPage}</span>

            {/* Next Button */}
            <button
                className={`page-item ${currentPage === totalPages ? 'disabled' : ''} border border-gray-300 rounded-md px-2 mx-1`}
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </nav>
    );
}

export default Pagination;
