// import "./BestProductList.css";
// import ProductListItem from "./ProductListItem";

// function BestProductList({ items }) {
//   return (
//     <div className="best-product-list">
//       <div className="label">베스트 상품</div>
//       <div className="items">
//         {items.map(({ id, favoriteCount, image, price, title }) => {

//         })}
//         <ProductListItem id, favoriteCount, image, price, title/>
//         <ProductListItem />
//         <ProductListItem />
//         <ProductListItem />
//       </div>
//       {items.map(({ id, favoriteCount, image, price, title }) => (
//         <div key={id} className="item">
//           <img className="image" src={image} alt={title}></img>
//           <div className="title">{title}</div>
//           <div className="price">{price}원</div>
//           <div className="like">
//             <img
//               className="like-icon"
//               src={likeIcon}
//               alt="좋아요 아이콘"
//             ></img>
//             <div className="like-num">{favoriteCount}</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default BestProductList;
