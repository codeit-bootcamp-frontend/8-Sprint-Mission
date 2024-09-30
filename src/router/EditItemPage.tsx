import { useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import {
  getProductDetail,
  patchProductDetail,
  queryClient,
} from "../utils/http";
import Section from "../ui/Section/Section";
import ProductForm from "../components/AddProduct/ProductForm";

export default function EditItemPage() {
  const params = useParams();
  const navigate = useNavigate();
  const { data, isPending: getDataIsPending } = useQuery({
    queryKey: ["products", params.productid],
    queryFn: () => getProductDetail(parseInt(params.productId, 10)),
    refetchOnMount: true,
    staleTime: 0,
  });

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: (formData) =>
      patchProductDetail(parseInt(params.productId, 10), formData as any),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      navigate("/items");
    },
  });

  const handleEditProductSubmit = (formData) => {
    mutate(formData);
  };

  const initializeTags = (tagsFromApi: string[]) => {
    return tagsFromApi.map((tag, index) => ({
      id: `${tag}-${index}-${Math.random().toString(36).substring(2, 9)}`,
      name: tag,
    }));
  };

  const inputData = data
    ? {
        ...data,
        tags: initializeTags(data.tags),
      }
    : undefined;

  if (getDataIsPending) {
    return <p>불러오는중...</p>;
  }

  return (
    <Section>
      <ProductForm inputData={inputData} onSubmit={handleEditProductSubmit} />
    </Section>
  );
}
