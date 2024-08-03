import './Card.css';
import { ReactComponent as HeartIcon } from '../../assets/ic_heart.svg';
import { Link } from 'react-router-dom';
import ProductById from '../../DTO/productById';

function Card({item}: { item: ProductById }) {

    const price = item.price.toLocaleString();

    return (
        <Link to={`${item.id}`}>
            <div className="card-container">
                <img src={item.images[0]} className="card item-image" alt={item.name} />
                <div className="card-info">
                    <span className="card item-name">{item.name}</span>
                    <span className="card item-price">{price}원</span>
                    <span className="card item-favorite"><HeartIcon />{item.favoriteCount}</span>
                </div>
            </div>
        </Link>
    )
}

export default Card;