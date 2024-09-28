import { getProductById } from '@lib/api/items.api';
import { useEffect, useState, useCallback } from 'react';

interface ItemState {
  imgSrc: string;
  title: string;
  price: number;
  desc: string;
  tags: string[];
  isFavorite: boolean;
  favoriteCount: number;
}

export function useItem(productId: number) {
  const [itemState, setItemState] = useState<ItemState>({
    imgSrc: '',
    title: '',
    price: 0,
    desc: '',
    tags: [],
    isFavorite: false,
    favoriteCount: 0,
  });

  const fetchProduct = useCallback(async () => {
    try {
      const result = await getProductById(productId);
      setItemState({
        imgSrc: result.images[0],
        title: result.name,
        price: result.price,
        desc: result.description,
        tags: result.tags,
        isFavorite: result.isFavorite,
        favoriteCount: result.favoriteCount,
      });
    } catch (error) {
      setItemState({
        imgSrc:
          'https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg',
        title: '-',
        price: 0,
        desc: '-',
        tags: [],
        isFavorite: false,
        favoriteCount: 0,
      });
    }
  }, [productId]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return itemState;
}
