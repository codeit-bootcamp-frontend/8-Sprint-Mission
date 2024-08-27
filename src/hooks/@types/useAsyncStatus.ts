interface FnQuery {
  query: {
    currentPage?: number;
    keyword?: string;
    order?: string;
    size?: number;
    productId?: number;
  };
}

interface FetchResponse<T> {
  list: T;
  totalCount: number;
}

type FetchProductType = (args: FnQuery) => Promise<void>;

export type { FnQuery, FetchResponse, FetchProductType };
