import { MouseEvent } from "react";

export enum SortOptionType {
  recent = "최신순",
  like = "좋아요순",
}

interface SortOptionProps {
  isOpen: boolean;
  sortText: "recent" | "like";
  sortHandler: (e: MouseEvent<HTMLButtonElement>) => void;
  showOptions: () => void;
}

export type { SortOptionProps };
