import { Helmet } from "react-helmet";
import Header from "../components/header/Header";
import Items from "../components/main/Items";

function ItemsPage() {
    return (
        <>
            <Helmet>
                <title>중고마켓</title>
            </Helmet>
            <Header />
            <Items />
        </>
    );
}

export default ItemsPage;
