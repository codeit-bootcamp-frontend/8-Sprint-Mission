import { useEffect, useState } from 'react';
import { getProductById } from '../../../pages/api/Items';

/**
 *
 * @param {number} productId
 * @param {array} deps
 * @returns [imgSrc, title, price, desc, tags, favoriteCount]
 */
export function useItem(productId: number = 0, deps: any[] = []) {
  const [imgSrc, setImgSrc] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [desc, setDesc] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [favoriteCount, setFavoriteCount] = useState<number>(0);

  const fetchProduct = async () => {
    try {
      const result = await getProductById(productId);
      setImgSrc(result.images[0]);
      setTitle(result.name);
      setPrice(result.price);
      setDesc(result.description);
      setTags(result.tags);
      setIsFavorite(result.isFavorite);
      setFavoriteCount(result.favoriteCount);
    } catch (error) {
      // 디폴트 값
      setImgSrc(
        'https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg'
      );
      setTitle('-');
      setPrice(0);
      setDesc('-');
      setTags([]);
      setIsFavorite(false);
      setFavoriteCount(0);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, deps);

  return { imgSrc, title, price, desc, tags, isFavorite, favoriteCount };
}
