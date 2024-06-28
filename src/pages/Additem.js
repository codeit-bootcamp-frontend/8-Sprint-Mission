import styles from "../styles/AddItem.module.css";

import Header from "../components/Header";
import ItemForm from "../components/AddItem/ItemForm";

function AddItem() {
  return (
    <>
      <Header pageType="item" isLogin={true} />
      <ItemForm className={styles["item-form"]} />
    </>
  );
}

export default AddItem;
