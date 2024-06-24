import './Card.css';
import { ReactComponent as HeartIcon } from '../../assets/ic_heart.svg';

function Card({item}) {

    const price = item.price.toLocaleString();

    return (
        <>
            <img src={item.images} className="card item-image" alt={item.name} />
            <span className="card item-name">{item.name}</span>
            <span className="card item-price">{price}원</span>
            <span className="card item-favorite"><HeartIcon />{item.favoriteCount}</span>
        </>
    )
}

export default Card;