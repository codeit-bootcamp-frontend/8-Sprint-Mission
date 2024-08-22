export const BASE_URL = "https://panda-market-api.vercel.app";

// GET 요청을 위한 공통 fetch 함수
export async function fetchFromApi<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP 에러: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("API 요청 실패:", error);
    throw error;
  }
}
