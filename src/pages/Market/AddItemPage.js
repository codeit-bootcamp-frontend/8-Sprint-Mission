import styles from "./AddItemPage.module.css";

import Header from "../../components/@shared/Header/Header";
import ItemForm from "../../components/Market/ItemForm/ItemForm";

function AddItemPage() {
  return (
    <>
      <Header pageType="item" isLogin={true} />
      <ItemForm className={styles["item-form"]} />
    </>
  );
}

export default AddItemPage;
