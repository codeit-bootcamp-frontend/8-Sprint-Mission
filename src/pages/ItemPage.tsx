import { Navigate, useParams } from "react-router-dom";
import Header from "../components/header/Header";
import { getProductById } from "../api/api";
import ItemInfo from "../components/ItemInfo";
import useAsync from "../hooks/useAsync";
import { useCallback, useEffect, useState } from "react";
import { Container } from "../components/styles";
import ItemComments from "../components/ItemComments";
import LoadingErrorHandler from "../components/LoadingErrorHandler";
import ProductById from "../DTO/productById";

const INITIAL_ITEM_VALUE: ProductById = {
    "createdAt": '',
    "id": 0,
    "name": '',
    "ownerId": 0,
    "description": '',
    "price": 0,
    "tags": [],
    "images": [],
    "favoriteCount": 0,
    "isFavorite": false,
    "updatedAt": '',
}

function ItemPage() {

    const { itemId } = useParams();
    const [item, setItem] = useState(INITIAL_ITEM_VALUE);
    const { isPending: isLoading, error, wrappedFunction: getProductByIdAsync } = useAsync(getProductById);

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
                {(isLoading || error)
                    ?<LoadingErrorHandler isLoading={isLoading} error={error} />
                    :<ItemInfo item={item} />
                }
                <ItemComments itemId={itemId as string} />
            </Container>
        </>
    )
}

export default ItemPage;