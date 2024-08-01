import { useState, useEffect } from "react";

type ApiCallFunction<T> = (params: any) => Promise<T>;

function useFetch<T>(
  apiCall: ApiCallFunction<T>,
  requestParams: any,
  initialValue: T
) {
  const [data, setData] = useState<T>(initialValue);
  //prevent object's reference
  const paramsString = JSON.stringify(requestParams);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apiCall(requestParams);
        setData(result);
      } catch (error) {
        console.error("데이터 패칭 실패:", error);
      }
    };

    fetchData();
  }, [apiCall, paramsString]);

  return { data };
}

export default useFetch;
