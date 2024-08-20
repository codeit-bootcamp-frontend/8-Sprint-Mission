interface QueryType {
  query: {
    orberBy?: 'recent' | 'like';
    pageSize?: string | number;
    keyword?: string;
    page?: number;
  };
}

interface CommentQueryType {
  query: {
    limit: number;
  };
}

export type { QueryType, CommentQueryType };
