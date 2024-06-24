import './BestProductList.css';

function BestProductListItem({ item }) {

    return (
        <div className='BestProductListItem'>
            <img className="BestProductListItem-img" src={item.images} alt={item.name}></img>
            <p> {item.name}</p>
            <h3>{item.price}</h3>
            <p>{item.favoriteCount}</p>
        </div>
    );

}

function BestProductList({ items }) {

    const displayedItems = items.slice(0, 4);
    return (

        <div className='BestProductList'>
            {displayedItems.map((item) => {
                return (
                    <BestProductListItem key={item.id} item={item} />

                );
            })}
        </div>
    )
}

export default BestProductList;