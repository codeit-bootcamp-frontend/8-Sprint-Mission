export interface BoardItemType {
  id: number;
  title: string;
  content: string;
  image: string;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  writer: WriterType;
}

interface WriterType {
  id: number;
  nickname: number;
}

export interface BoardItemProps {
  board: BoardItemType;
}

export interface BoardItemListProps {
  boards: BoardItemType[];
}
