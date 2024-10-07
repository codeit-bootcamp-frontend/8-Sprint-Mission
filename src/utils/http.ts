import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

interface Tag {
  id: string;
  name?: string;
}

interface Query {
  productId?: number;
  currentPage?: number;
  order?: string;
  size?: number;
  keyword?: string;
}

interface ProductType {
  images: string | string[];
  tags: Tag[];
  price: string;
  description: string;
  name: string;
}

interface PostCommentType {
  id: string;
  data: string;
}

interface LoginType {
  email: string;
  password: string;
}

interface RegisterType {
  email: string;
  nickname: string;
  password: string;
  passwordCheck: string;
}

export async function getAllProduct(query: Query) {
  const { currentPage, order, size, keyword } = query;
  const response = await fetch(
    `${process.env.REACT_APP_API_BASE_URL}/products?page=${currentPage}&orderBy=${order}&pageSize=${size}&keyword=${keyword}`
  );
  if (!response.ok) {
    throw new Error("데이터를 불러오는 중 에러가 발생했습니다.");
  }
  const data = await response.json();
  return data;
}

export async function getFavoriteProduct(query: Query) {
  const { size } = query;
  const response = await fetch(
    `${process.env.REACT_APP_API_BASE_URL}/products?&orderBy=favorite&pageSize=${size}`
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error("데이터를 불러오는 중 에러가 발생했습니다.");
  }
  return data;
}

export async function getProductDetail(id: number) {
  const response = await fetch(
    `${process.env.REACT_APP_API_BASE_URL}/products/${id}`
  );

  if (!response.ok) {
    throw new Error("상품 불러오기 실패");
  } else {
    const productData = await response.json();
    return productData;
  }
}

export async function patchProductDetail(id: number, data: ProductType) {
  const accessToken = localStorage.getItem("token");
  const filteredTagsName = data.tags.map((tag) => tag.name);
  const productData = {
    images:
      data.images ||
      "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991853452/5389615.png",
    tags: filteredTagsName,
    price: data.price,
    description: data.description,
    name: data.name,
  };
  const response = await fetch(
    `${process.env.REACT_APP_API_BASE_URL}/products/${id}`,
    {
      method: "PATCH",
      body: JSON.stringify(productData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("상품 불러오기 실패");
  } else {
    const productData = await response.json();
    return productData;
  }
}

export async function removeProduct(id: number) {
  const accessToken = localStorage.getItem("token");

  const response = await fetch(
    `${process.env.REACT_APP_API_BASE_URL}/products/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("상품 불러오기 실패");
  }
}

export async function getCommentList(id: number) {
  const response = await fetch(
    `${process.env.REACT_APP_API_BASE_URL}/products/${id}/comments?limit=10`
  );
  if (!response.ok) {
    throw new Error("댓글 불러오기 실패");
  }
  const { list } = await response.json();
  return list;
}

export async function signUp(data: RegisterType) {
  const userData = {
    email: data.email,
    nickname: data.nickname,
    password: data.password,
    passwordConfirmation: data.passwordCheck,
  };
  const response = await fetch(
    `${process.env.REACT_APP_API_BASE_URL}/auth/signUp`,
    {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || "예기치 않은 오류가 발생했습니다.");
  }
  return result;
}

export async function updateToken(refreshToken: string) {
  const response = await fetch(
    `${process.env.REACT_APP_API_BASE_URL}/auth/refresh-token`,
    {
      method: "POST",
      body: JSON.stringify({ refreshToken: refreshToken }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(response);
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || "예기치 않은 오류가 발생했습니다.");
  }
  return result;
}

export async function signIn(data: LoginType) {
  const userData = {
    email: data.email,
    password: data.password,
  };
  const response = await fetch(
    `${process.env.REACT_APP_API_BASE_URL}/auth/signIn`,
    {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || "예기치 않은 오류가 발생했습니다.");
  }
  return result;
}

export async function imageUpload(image: File) {
  const accessToken = localStorage.getItem("token");
  const imageData = new FormData();
  imageData.append("image", image);
  const response = await fetch(
    `${process.env.REACT_APP_API_BASE_URL}/images/upload`,
    {
      method: "POST",
      body: imageData,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  const data = await response.json();
  return data;
}

export async function postProduct(data: ProductType, method: string) {
  const accessToken = localStorage.getItem("token");
  const filteredTagsName = data.tags.map((tag) => tag.name);

  const productData = {
    images: data.images || "null",
    tags: filteredTagsName,
    price: data.price,
    description: data.description,
    name: data.name,
  };
  const response = await fetch(
    `${process.env.REACT_APP_API_BASE_URL}/products`,
    {
      method: method,
      body: JSON.stringify(productData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || "예기치 않은 오류가 발생했습니다.");
  }
  return result;
}

export async function postProductComment({ id, data }: PostCommentType) {
  const accessToken = localStorage.getItem("token");
  const response = await fetch(
    `${process.env.REACT_APP_API_BASE_URL}/products/${id}/comments`,
    {
      method: "POST",
      body: JSON.stringify({ content: data }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("상품 불러오기 실패");
  } else {
    const productData = await response.json();
    return productData;
  }
}
