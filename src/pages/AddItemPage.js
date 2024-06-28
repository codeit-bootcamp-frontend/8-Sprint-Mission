import Header from "../components/header/Header";
import AddItemForm from "../components/AddItemForm";
import { Helmet } from "react-helmet";

function AddItemPage() {

    return (
        <>
            <Helmet>
                <title>상품 등록</title>
            </Helmet>
            <Header />
            <AddItemForm />
        </>
    );
}

export default AddItemPage;