export const API_PATH = {
  products() {
    return "/products";
  },
  image() {
    return "/images/upload";
  },
  articleComments(id: number) {
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
  articleById(id: string) {
    return `/articles/${id}`;
  },
};
