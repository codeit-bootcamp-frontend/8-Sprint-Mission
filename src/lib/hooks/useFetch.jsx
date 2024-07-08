import { useState, useEffect } from "react";

function useFetch(apiCall, requestParams, initialValue) {
  const [data, setData] = useState(initialValue);
  //prevent object's reference
  const paramsString = JSON.stringify(requestParams);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const parsedParams = JSON.parse(paramsString);
        const result = await apiCall(parsedParams);
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
