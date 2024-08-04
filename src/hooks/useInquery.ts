import { useState, useEffect } from "react";
import { getInquery } from "./../services/api";
import {
  Inquiry,
  InqueryResponse,
  UseInqueryReturn,
} from "../types/inquiryTypes";

const useInquery = (productId: number): UseInqueryReturn => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        setIsLoading(true);
        const fetchedInquiries: InqueryResponse = await getInquery(productId);
        setInquiries(fetchedInquiries.list);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error("An unknown error occurred"));
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchInquiries();
  }, [productId]);

  return { inquiries, isLoading, error };
};

export default useInquery;
