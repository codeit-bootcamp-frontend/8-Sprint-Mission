import './Card.css';
import { ReactComponent as HeartIcon } from '../../assets/ic_heart.svg';
import { Link } from 'react-router-dom';

function Card({item}) {

    const price = item.price.toLocaleString();

    return (
        <>
            <img src={item.images} className="card item-image" alt={item.name} />
            <span className="card item-name"><Link to={`${item.id}`}>{item.name}</Link></span>
            <span className="card item-price">{price}원</span>
            <span className="card item-favorite"><HeartIcon />{item.favoriteCount}</span>
        </>
    )
}

export default Card;