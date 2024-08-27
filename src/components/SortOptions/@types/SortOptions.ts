import { MouseEvent } from "react";

export interface SortOptionProps {
  isOpen: boolean;
  sortText: string;
  sortHandler: (e: MouseEvent) => void;
  showOptions: () => void;
}
