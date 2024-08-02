interface ProductById {
    createdAt: string;
    description: string;
    favoriteCount: number;
    id: number;
    images: string[];
    isFavorite: boolean;
    name: string;
    ownerId: number;
    price: number;
    tags: string[];
    updatedAt: string;
}

export default ProductById;