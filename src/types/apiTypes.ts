// apiTypes.ts
export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface Comment {
  id: string;
  content: string;
}

export interface FetchError {
  status?: number;
  message: string;
}
