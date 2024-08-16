import { Article } from '@/entities';
import { createContext } from 'react';

export const BoardDetailContext = createContext<Article | null>(null);
