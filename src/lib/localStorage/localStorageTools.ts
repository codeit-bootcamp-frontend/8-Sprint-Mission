const localStorageTools = () => {
  const setInfo = <T = any>(itemName: string, item: T) => {
    const strItem = JSON.stringify(item);
    localStorage.setItem(itemName, strItem);
    return strItem;
  };

  const getInfo = (itemName: string) => {
    const storageItem = localStorage.getItem(itemName);

    if (storageItem) {
      return JSON.parse(storageItem);
    } else {
      return storageItem;
    }
  };

  return { setInfo, getInfo };
};

export default localStorageTools;
