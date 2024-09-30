interface PaginationProps {
  currentPage: number;
  maxPage: number;
  pageHandler: (page: number | string) => void;
}

interface PageSliceOptions {
  start: number;
  end: number;
}

export type { PaginationProps, PageSliceOptions };
