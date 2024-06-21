import './ProductList.css';

function ProductListItem({ item }) {

    return (
        <div className='ProductListItem'>
            <img className="ProductListItem-img" src={item.images} alt={item.name}></img>
            <p> {item.name}</p>
            <h3>{item.price}</h3>
            <p>{item.favoriteCount}</p>
        </div>
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