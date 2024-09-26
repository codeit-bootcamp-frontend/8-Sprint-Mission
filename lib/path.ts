export const API_PATH = {
  products() {
    return "/products";
  },
  productsWithId(productId: string | number) {
    return `/products/${productId}`;
  },
  productsComments(productId: string | number, limit?: number) {
    return `/products/${productId}/comments?limit=${limit}`;
  },
  image() {
    return "/images/upload";
  },
  articleComments(id: string | number) {
    return `/articles/${id}/comments`;
  },
  articleCommentsWithLimit(id: string | number, limit?: number) {
    return `/articles/${id}/comments?limit=${limit}`;
  },
  signUp() {
    return "/auth/signUp";
  },
  signIn() {
    return "/auth/signIn";
  },
  articles(option?: string, pageSize?: number) {
    return `/articles/?orderBy=${option}&pageSize=${pageSize}`;
  },
  articleById(id: string | number) {
    return `/articles/${id}`;
  },
};
