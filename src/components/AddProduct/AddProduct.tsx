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
  imgFile: File | null;
  tags: Tag[];
  price: string;
  description: string;
  name: string;
}

export default function AddProduct() {
  const navigate = useNavigate();
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: (data) => postProduct(data as any, "POST"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      navigate("/items");
    },
  });
  const handleAddProductSubmit = (formData) => {
    mutate(formData);
  };
  return (
    <Section>
      <ProductForm onSubmit={handleAddProductSubmit} />
    </Section>
  );
}
