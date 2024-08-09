import { OptionalPick } from '../lib/utils/OptionalPick';
import { BasicType } from './BasicTypes';

export type Article = OptionalPick<
  BasicType,
  'id',
  'updatedAt' | 'createdAt' | 'writer'
>;
