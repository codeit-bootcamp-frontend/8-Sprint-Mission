import './Pagination.css';

function Pagination() {
  return (
    <ul className="pagination-wrap">
      <li>
        <button className="pagination-button">좌</button>
      </li>
      <li>
        <button className="pagination-button">1</button>
      </li>
      <li>
        <button className="pagination-button">2</button>
      </li>
      <li>
        <button className="pagination-button">3</button>
      </li>
      <li>
        <button className="pagination-button">4</button>
      </li>
      <li>
        <button className="pagination-button">5</button>
      </li>
      <li>
        <button className="pagination-button">우</button>
      </li>
    </ul>
  );
}

export default Pagination;
