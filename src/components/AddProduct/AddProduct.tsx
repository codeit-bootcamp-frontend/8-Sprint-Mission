import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import Section from "../../ui/Section/Section";
import ProductForm from "./ProductForm";
import { postProduct, queryClient } from "../../utils/http";

interface Tag {
  id: string;
  name?: string;
}

interface ProductType {
  images: string[];
  tags: Tag[];
  price: string;
  description: string;
  name: string;
}

export default function AddProduct() {
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation<ProductType, Error, ProductType>({
    mutationFn: (data) => postProduct(data, "POST"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      navigate("/items");
    },
  });
  const handleAddProductSubmit = (formData: ProductType) => {
    mutate(formData);
  };
  return (
    <Section>
      <ProductForm isPending={isPending} onSubmit={handleAddProductSubmit} />
    </Section>
  );
}
