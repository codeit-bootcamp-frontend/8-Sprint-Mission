export const API_PATH = {
  usersPath: { default: '/users' },
  productPath: { default: '/products' },
  imagesPath: { default: '/images' },
  commentPath: {
    default: '/comments',
    products(id: string | number) {
      return `/products/${id}${this.default}`;
    },
    articles(id: string | number) {
      return `/articles/${id}${this.default}`;
    },
    detail(id: string | number) {
      return `${this.default}/${id}`;
    },
  },
  authPath: {
    default: '/auth',
    signUp: '/auth/signUp',
    signIn: '/auth/signIn',
    refreshToken: '/auth/refresh-token',
  },
  articlePath: {
    default: '/articles',
    detail(id: number | string) {
      return `${this.default}/${id}`;
    },
    like(id: number) {
      return `${this.default}/${id}/like`;
    },
  },
  get users() {
    return this.usersPath.default;
  },
  get product() {
    return this.productPath.default;
  },
  get images() {
    return this.imagesPath.default + '/upload';
  },
  get comment() {
    return this.commentPath.default;
  },
  get article() {
    return this.articlePath.default;
  },
  get auth() {
    return this.authPath.default;
  },
};
