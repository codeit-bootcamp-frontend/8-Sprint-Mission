import './ProductList.css';
import { useNavigate } from 'react-router-dom';

function ProductListItem({ item }) {

    const navigate = useNavigate();
    const handleAddItemClick = () => {
        navigate(`/items/${item.id}`);
    }


    return (
        <button onClick={handleAddItemClick} className='ProductListItem'>
            <img className="ProductListItem-img" src={item.images} alt={item.name}></img>
            <p> {item.name}</p>
            <h3>{item.price}원</h3>
            <p>{item.favoriteCount}</p>
        </button>
    );

}

function ProductList({ items }) {


    return (

        <div className='ProductList'>
            {items.map((item) => {
                return (
                    <ProductListItem key={item.id} item={item} />

                );
            })}
        </div>
    )
}

export default ProductList;