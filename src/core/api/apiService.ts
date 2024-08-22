export const BASE_URL = "https://panda-market-api.vercel.app";

// GET, 공통 apiCall 함수
export async function getFromApi<T>(url: string): Promise<T> {
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

// POST, 공통 apiCall 함수
export async function postToApi<T>(url: string, data: T): Promise<T> {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP 에러: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("API 요청 실패:", error);
    throw error;
  }
}
