import { useState, useEffect } from 'react';
import { getInquery } from './../services/api';

const useInquery = productId => {
  const [inquiries, setInquiries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        setIsLoading(true);
        const fetchedInquiries = await getInquery(productId);
        setInquiries(fetchedInquiries.list);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInquiries();
  }, [productId]);

  return { inquiries, isLoading, error };
};

export default useInquery;
