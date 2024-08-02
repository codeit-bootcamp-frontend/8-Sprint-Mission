interface comment {
  id: number;
  name: string;
  content: string;
  createdAt: string;
  images: string;
  nickname: string;
  updatedAt: number;
}

interface commentList {
  list: comment[];
}

export async function getComments(
  productId = 9,
  limit = 5
): Promise<commentList> {
  const path = `/products/${productId}/comments?`;
  const query = `limit=${limit}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app${path}${query}`
  );
  if (!response.ok) {
    throw new Error("댓글을 불러오는데 실패했습니다");
  }
  const result = await response.json();
  return result;
}
