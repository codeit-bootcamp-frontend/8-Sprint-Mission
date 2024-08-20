import { OrderByType } from '@/entities/articles';

export const BOARD_DROPDOWN_CONTENTS = [
  { id: 'time', item: '최신순' },
  { id: 'like', item: '좋아요순' },
];

export type BoardDropdownIdType = OrderByType;
export type BoardDropdownContentType = '최신순' | '좋아요순';
