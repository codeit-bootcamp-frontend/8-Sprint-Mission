export const ROUTER_PATH = {
  HOME: '/',
  BOARD: {
    default: '/boards',
    add: '/addboard',
    detail(id: string | number) {
      return this.default + `/${id}`;
    },
  },
  ITEM: {
    default: '/items',
    detail(id: string | number) {
      return this.default + `/${id}`;
    },
  },
};
