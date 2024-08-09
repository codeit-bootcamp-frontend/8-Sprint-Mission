export type BasicType = {
  title: string;
  id: number;
  name: string;
  updatedAt: Date;
  createdAt: Date;
  image: string;
  content: string;
  writer: { id: number; nickname: string };
  isRound: boolean;
  src: string;
  alt: string;
  className: string;

  // handler
  onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};
