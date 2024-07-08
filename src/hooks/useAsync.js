import { useCallback, useEffect, useState } from "react";

function useAsync(asyncFunction, arg) {
  //  pending, error 상태값을 status: '대기중', '로딩중' , '완료', '에러'로 바꾸기
  const [fetchStatus, setFetchStatus] = useState("");
  const [data, setData] = useState({});
  const getFetchData = useCallback(async () => {
    setFetchStatus("대기중");

    try {
      const getData = await asyncFunction(arg);
      if (!getData) {
        throw new Error("데이터를 불러오지 못했습니다.");
      }
      setData((data) => ({ ...data, getData }));
    } catch (error) {
      setFetchStatus("에러");
    } finally {
      setFetchStatus("완료");
    }
  }, [arg, asyncFunction]);

  useEffect(() => {
    getFetchData();
  }, [getFetchData]);

  return [fetchStatus, data];
}
export default useAsync;
