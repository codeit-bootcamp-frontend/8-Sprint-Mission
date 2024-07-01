import React from "react";
import BestItems from "./best-items/BestItems";
import OnSalesNow from "./now-items/OnSalesNow";
import usePageRequestHook, {
  PAGENATION_SIZE,
} from "app/hooks/usePageRequestHook";
import { PageRequestQuery } from "custom.t";
import { getPageSize } from "utils";

const Main: React.FC = () => {
  const [bestItemQuery, setBestItemQuery] = React.useState<PageRequestQuery>({
    page: 1,
    pageSize: getPageSize(1, 2, 4),
    orderBy: "favorite",
  });

  const [onSalesNowQuery, setOnSalesNowQuery] =
    React.useState<PageRequestQuery>({
      page: 1,
      pageSize: getPageSize(4, 6, 10),
      orderBy: "recent",
      keyword: "",
    });

  const [bestItemData, isLoadingBestItem] = usePageRequestHook(bestItemQuery);
  const [onSalesNowData, isLoadingOnSalesNow] =
    usePageRequestHook(onSalesNowQuery);

  React.useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;

    const handleResize = () => {
      const bestItemSize = getPageSize(1, 2, 4);
      const onSalesNowSize = getPageSize(4, 6, 10);

      let originalPage: number, newPage: number;
      if (onSalesNowQuery && onSalesNowData) {
        originalPage = onSalesNowQuery.page;
        const { totalCount } = { ...onSalesNowData };
        const totalPages = Math.ceil(totalCount / onSalesNowSize);
        const tmpEnd =
          Math.ceil(originalPage / PAGENATION_SIZE) * PAGENATION_SIZE;
        const end = Math.min(totalPages, tmpEnd);
        newPage = Math.min(originalPage, end);
      }

      setBestItemQuery((prevState) => ({
        ...prevState,
        pageSize: bestItemSize,
      }));
      setOnSalesNowQuery((prevState) => ({
        ...prevState,
        page: newPage || originalPage,
        pageSize: onSalesNowSize,
      }));
    };

    const onResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 200);
    };

    const onClick = (event: globalThis.MouseEvent) => {
      const el = event.target as HTMLElement;
      const role = el.dataset.role as string;
      if (role !== "page") return;
      const targetPage = el.dataset.page as string;
      setOnSalesNowQuery((prevState) => ({
        ...prevState,
        page: Number(targetPage),
      }));
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("click", onClick);
    };
  }, [onSalesNowQuery, onSalesNowData]);

  return (
    <>
      <BestItems data={bestItemData} isLoading={isLoadingBestItem} />
      <OnSalesNow data={onSalesNowData} isLoading={isLoadingOnSalesNow} />
    </>
  );
};

export default Main;
