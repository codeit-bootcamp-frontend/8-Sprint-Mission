interface Produect {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string;
  createdAt: string;
  favoriteCount: number;
  tags: string;
}

interface ProduectList {
  list: Produect[];
}

export async function getProducts(
  pageSize = 10,
  orderBy = "recent"
): Promise<ProduectList> {
  const query = `pageSize=${pageSize}&orderBy=${orderBy}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  if (!response.ok) {
    throw new Error("제품을 불러오는데 실패했습니다");
  }
  const result = await response.json();
  return result;
}
