export const ROUTER_PATH = {
  HOME: '/',
  BOARD: {
    default: '/boards',
    add: '/addboard',
    detail(id: string) {
      return this.default + `/${id}`;
    },
  },
};
