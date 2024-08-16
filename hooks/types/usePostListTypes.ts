interface QueryType {
  query: {
    orberBy?: "recent" | "like";
    pageSize?: string | number;
    keyword?: string;
    page?: number;
  };
}

export type { QueryType };
