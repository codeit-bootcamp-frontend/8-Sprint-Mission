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
export async function postToApi<T>(
  url: string,
  data: T,
  jwtToken?: string
): Promise<T> {
  try {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    if (jwtToken) {
      headers["Authorization"] = `Bearer ${jwtToken}`;
    }

    const response = await fetch(url, {
      method: "POST",
      headers: headers,
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
