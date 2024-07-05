import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from '../api';
import './Products.css';
import Button from "../components/Button/Button";
import { useNavigate } from 'react-router-dom';
import favoriteImg from '../img/ic_heart.png'
import backImg from '../img/ic_back.png'
import CommentList from "../components/CommentList/CommentList";


function Products() {
    const navigate = useNavigate();
    const { productSlug } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        handleLoad(productSlug);
    }, [productSlug]);

    const handleLoad = async (productSlug) => {
        const list = await getProduct(productSlug);
        setItem(list);

    }

    const handleBackClick = () => {
        navigate('/items');
    }

    return (<div>

        <div className="itemWrapper">
            <img src={item.images} alt={item.name} className='itemImg'></img>
            <div className="itemLetter">
                <div className="itemLetterTop">
                    <span className="itemName"> {item.name}</span>
                    <span className="itemPrice">{item.price}원</span>
                </div>
                <div className="itemLetterBottom">
                    <span className="itemTitle">상품소개</span>
                    <p className="itemDescription">{item.description}</p>

                    <span className="itemTitle">상품태그</span>
                    <div className="itemTags">
                        {item.tags && item.tags.map((tag, index) => (
                            <div key={index} className="itemTag" >#{tag}</div>
                        ))}
                    </div>
                    <div className="itemFavorite">
                        <img src={favoriteImg} />
                        <span>{item.favoriteCount}</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="inquiryWrapper">
            <label>문의하기</label>
            <input className="inquiryInput" placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."  ></input>
            <Button select="disable" width="inquiry" >등록</Button>

        </div>

        <CommentList productSlug={productSlug} />

        <button className="backButton" onClick={handleBackClick}>
            <span>목록으로 돌아가기</span>
            <img src={backImg} />
        </button>
    </div>)
}

export default Products;