import { Navigate, useParams } from "react-router-dom";
import Header from "../components/header/Header";
import { getProductById } from "../api/api";
import ItemInfo from "../components/ItemInfo";
import useAsync from "../hooks/useAsync";
import { useCallback, useEffect, useState } from "react";
import { Container } from "../components/styles";
import ItemComments from "../components/ItemComments";

const INITIAL_ITEM_VALUE = {
    "id": 0,
    "name": '',
    "description": '',
    "price": 0,
    "tags": [],
    "images": [],
    "favoriteCount": 0,
    "isFavorite": false,
}

function ItemPage() {

    const { itemId } = useParams();
    const [item, setItem] = useState(INITIAL_ITEM_VALUE);
    const [isLoading, error, getProductByIdAsync] = useAsync(getProductById);

    const handleLoad = useCallback (async () => {
        const result = await getProductByIdAsync(itemId);

        setItem(result);
    }, [getProductByIdAsync, itemId])

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    if(!item) {return <Navigate to="/items" />}

    return(
        <>
            <Header />
            <Container>
                <ItemInfo item={item} />
                <ItemComments />
            </Container>
        </>
    )
}

export default ItemPage;