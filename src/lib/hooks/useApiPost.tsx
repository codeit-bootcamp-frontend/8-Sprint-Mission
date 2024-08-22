import { useState } from "react";

type ApiCallFunction<T> = (url: string, data: any) => Promise<T>;

function useApiPost<T>(
  apiCall: ApiCallFunction<T>,
  url: string,
  initialValue: T
) {
  const [data, setData] = useState<T>(initialValue);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const postData = async (requestData: any) => {
    setLoading(true);
    try {
      const result = await apiCall(url, requestData);
      setData(result);
      setError(null);
    } catch (error) {
      console.error("POST 요청 실패:", error);
      setError("데이터 전송 실패");
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, postData };
}

export default useApiPost;
