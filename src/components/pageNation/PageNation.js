import './PageNation.css';

function PageNation({ totalPages, currentPage, handlePageChange }) {

    return (
        <div className="pagination">
            <button className='pageButton' disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>{'<'}</button>
            {Array.from({ length: totalPages }, (_, i) => (
                <button
                    key={i + 1}
                    className={currentPage === i + 1 ? 'pageButton active' : 'pageButton'}
                    onClick={() => handlePageChange(i + 1)}
                >
                    {i + 1}
                </button>
            ))}
            <button className='pageButton' disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>{'>'}</button>
        </div>
    )
}

export default PageNation;